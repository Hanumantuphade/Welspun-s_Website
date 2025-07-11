import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Award, Users, Truck, Shield } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We source only the finest materials and work with trusted manufacturers to ensure every product meets our high standards.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Our dedicated customer service team is always ready to help you find the perfect products for your home.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery across India, with free shipping on orders above ₹999.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description:
        "30-day return policy and quality guarantee on all our products for your peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              About Swarattan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating beautiful, comfortable homes with premium quality
              furnishings since 2010
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Swarattan store began with a simple vision: to make premium
                  home furnishings accessible to every Indian home. What started
                  as a small family business has grown into one of India's most
                  trusted home decor brands.
                </p>
                <p>
                  We believe that your home should be a reflection of your
                  personality and style. That's why we carefully curate our
                  collection to include everything from classic designs to
                  contemporary trends, ensuring there's something perfect for
                  every taste and budget.
                </p>
                <p>
                  Today, we serve millions of customers across India, helping
                  them transform their houses into homes they love. Our
                  commitment to quality, affordability, and customer
                  satisfaction remains at the heart of everything we do.
                </p>
              </div>
            </div>

            {/* Updated Image Section */}
            <div className="w-full h-full">
              <Image
                src="/About.jpeg"
                alt="About Swarattan"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-xl shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Why Choose Spaces?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best home furnishing
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-amber-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-amber-100">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">14+</div>
              <div className="text-amber-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To be India's most loved home furnishing brand by providing
              premium quality products at affordable prices, exceptional
              customer service, and inspiring design solutions that help our
              customers create beautiful, comfortable homes.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
