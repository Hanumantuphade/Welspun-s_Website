import React from "react";
import Header from "@/components/header";

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface PageLayoutProps {
  breadcrumbItems: BreadcrumbItem[];
  heroImage: string;
  heroTitle: string;
  heroSubtitle1: string;
  heroSubtitle2: string;
  heroSubtitle3: string;
  children: React.ReactNode;
}

export default function PageLayout({
  breadcrumbItems,
  heroImage,
  heroTitle,
  heroSubtitle1,
  heroSubtitle2,
  heroSubtitle3,
  children,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white max-w-full w-full mx-auto px-4 pb-6">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-full w-full mx-auto px-4">
          <nav className="text-sm text-gray-500">
            {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
              <span key={index}>
                {item.link ? (
                  <a href={item.link} className="text-sky-600 font-medium">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-sky-600 font-medium">{item.label}</span>
                )}
                {index < breadcrumbItems.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Background Image with Overlay and Text */}
      <div className="relative h-[440px] md:h-[440px] lg:h-[530px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={heroImage}
            alt="page"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white px-4">
          <h1 className="text-4xl font-light bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent mb-2">
            {heroTitle}
          </h1>
          <p className="text-gray-100">
            <span className="text-xl">{heroSubtitle1}</span> <br />
            <span className=" hidden md:block text-lg">{heroSubtitle2}</span> <br />
            <span className="hidden md:block">{heroSubtitle3}</span>
          </p>
        </div>
      </div>

      {children}
    </div>
  );
}
