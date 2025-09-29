'use server'

import { readFile, writeFile } from 'fs/promises'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
type User = {
  id: string
  firstName: string
  lastName: string
}

export const createUser = async (formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const newUser: User = { firstName, lastName, id: Date.now().toString() }


  //  const rawData = Object.fromEntries(formData)
  // does the same thing as above two lines. We cna just use Object.entries (JS function)
  //  console.log({firstName, lastName})


  await saveUser(newUser)
  // revalidatePath('/actions')
  // redirect('/') redirect('/actions) work as well

  // if you place redirect here. It will throw an error. Just place it after catch block
  // try {
  //   await saveUser(newUser)
  // redirect('/')
  // } catch (error) {
  //   console.log(error)
  // }
  redirect('/actions')

}

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf8' })
  const users = result ? JSON.parse(result) : []
  return users
}

const saveUser = async (user: User) => {
  const users = await fetchUsers()
  users.push(user)
  await writeFile('users.json', JSON.stringify(users))
}

// without revalidate path. We are simply adding the user to the array but we are not showing it on UI. 
// Next.js is aggressive on caching nd unless we make a req those values won't get updated.

// 2 options we have

// 1. revalidate path 2. Redirect to different path

// thing with redirect is when oyu place it in try and catch.
//  With asyn and await use generally use try catch. if you place redirect inside try catch.
//  It will throw an error. Just place it after catch.