import Image from "next/image"
import Link from "next/link"

export default function CategorySection() {
  const categories = [
    {
      id: 1,
      name: "Bedroom",
      image: "/images/bedSection/bed1/b1.png",
      description: "Comfortable bedding essentials",
      href: "/bed",
    },
    {
      id: 2,
      name: "Living Room",
      image: "/images/CurtainSection/cr1/c1.png",
      description: "Stylish home decor",
      href: "/curtains",
    },
    {
      id: 3,
      name: "Bathroom",
      image: "/images/bathSection/bath1/b1.png",
      description: "Luxury bath accessories",
      href: "/bath",
    },
    {
      id: 4,
      name: "Flooring",
      image: "/ct.jpeg",
      description: "Elegant flooring collections ",
      href: "/flooring  ",
    },
    {
      id: 5,
      name: "Rugs",
      image: "/images/rugsSection/rg1/r1.png",
      description: "Premium rugs collection ",
      href: "/rugs",
    },
    {
      id: 6,
      name: "Mattresses",
      image: "/images/MattressSection/ct.jpeg",
      description: "Premium comfort mattresses",
      href: "/mattress",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-amber-900 tracking-wide">SHOP BY CATEGORY</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`${category.name} Category`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>

              {/* Category Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
