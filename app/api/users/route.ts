import { fetchUsers, saveUser } from '@/utils/actions'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  //   const { searchParams } = new URL(req.url)
  //   //   console.log(req)
  //   console.log(searchParams.get('id'))

  console.log(req.url)
  console.log(req.nextUrl.searchParams.get('id'))

  const users = await fetchUsers()
  //   return Response.json({ users })
  // ?only absolute URs work here for NextResponse
  return NextResponse.redirect(new URL('/', req.url))
}

export const POST = async (req: Request) => {
  const result = await req.json()
  console.log(result)
  return Response.json({ msg: 'user created' })
}
