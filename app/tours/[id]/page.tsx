import mapsImg from '@/images/image.jpg'
// console.log(mapsImg)
import Image from 'next/image'
const url = 'https://www.course-api.com/images/tours/tours-3.jpeg'

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/*local image*/}
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            width={192}
            height={192}
            priority={true}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Local image</h2>
        </div>
        {/*remote image*/}
        <div>
          <Image
            src={url}
            alt="tour"
            width={192}
            height={192}
            priority
            className="w-48 h-48 object-cover rounded"
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  )
}

export default page
