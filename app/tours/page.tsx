import Link from 'next/link'
import Image from 'next/image'
const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(url)
  const data: Tour[] = await response.json()
  return data
}
async function ToursPage() {
  const data = await fetchTours()
  console.log(data)
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((tour) => {
          return (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className="hover: text-blue-500"
            >
              <div className="relative h-48 mb-2">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover rounded"
                />
              </div>
              <h1>{tour.name}</h1>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default ToursPage

// to be remembered
{/* Private Folders _folder

Route Groups (dashboard)

Dynamic Routes

[...folder] - Catch-all route segment
[[...folder]] Optional catch-all route segment (used by Clerk)
create test folder app/_css

create app/(dashboard)/auth

the url is just '/auth'*/}