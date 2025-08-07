import Header from "@/components/header";
import Footer from "@/components/footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
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
              <span className="text-sky-600 font-medium">Contact Us</span>
            </nav>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-light text-gray-900 mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Product Support</option>
                      <option>Order Status</option>
                      <option>Returns & Exchanges</option>
                      <option>Bulk Orders</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-900 text-white py-3 rounded-md hover:bg-amber-800 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-medium text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-amber-900 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600">
                          Customer Care: 6284824078{" "}
                        </p>
                        
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-amber-900 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">
                          swarattanenterprises@gmail.com
                        </p>
                       
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-amber-900 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Address</h3>
                        <p className="text-gray-600">
                          Swarattanent Homes Furnishing Pvt. Ltd.
                          <br />
                          Rama Mandi, Sco No - 04, Hoshiarpur Rd, Basant Hills,
                          <br />
                          Jalandhar, Punjab 144007
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-amber-900 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Business Hours
                        </h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 7:00 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday: 10:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">
                          Sunday: 11:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        What is your return policy?
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        We offer a 30-day return policy on all products.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Do you offer free shipping?
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Yes, free shipping on orders above ₹999.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        How long does delivery take?
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Standard delivery takes 3-7 business days across India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="my-16">
          <h3 className="text-2xl text-center font-medium text-gray-900 mb-4">
            Find Us on Map
          </h3>
          <div className="w-full h-[420px] rounded-lg overflow-hidden border border-gray-200">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13614.65198705127!2d75.5771681!3d31.3446159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b9d4539be3b%3A0x45fda3b597ccf6b3!2sBasant%20Hills%2C%20Jalandhar%2C%20Punjab%20144009!5e0!3m2!1sen!2sin!4v1718897460901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              // al lowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}
