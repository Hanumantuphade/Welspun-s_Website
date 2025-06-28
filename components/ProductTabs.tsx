"use client";
import { useState } from "react";
import { Product } from "@/types";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("DESCRIPTION");

  const renderTabContent = () => {
    switch (activeTab) {
      case "DESCRIPTION":
        return (
          <div className="text-sm text-gray-600">
            <p>{product.description}</p>
          </div>
        );
      case "RETURN POLICY":
        return (
          <p className="text-sm text-gray-600">
            {product.returnPolicy}
          </p>
        );
      case "CARE INSTRUCTION":
        return (
          <p className="text-sm text-gray-600">
            {product.careInstructions}
          </p>
        );
      case "MANUFACTURE DETAIL":
        return (
          <p className="text-sm text-gray-600">
            {product.manufactureDetail}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-6">
      <div className="border-b border-gray-200 pb-2 mb-4 flex gap-6 text-sm font-medium text-gray-700">
        {[
          "DESCRIPTION",
          "RETURN POLICY",
          "CARE INSTRUCTION",
          "MANUFACTURE DETAIL",
        ].map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer pb-1 ${
              activeTab === tab
                ? "text-amber-900 border-b-2 border-amber-900"
                : "hover:text-amber-900"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div>{renderTabContent()}</div>
    </div>
  );
}
