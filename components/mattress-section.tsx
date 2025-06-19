import Image from "next/image"

export default function MattressSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full width mattress image */}
        <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
          <Image
            src="/mattress-couple.webp"
            alt="SPACES Mattress Range - Perfect the art of a restful night's sleep"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}
