"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function KnowledgeCenterPage() {
  const articles = [
    { title: "Understanding HIV", content: "An overview of HIV, its transmission, and prevention." },
    { title: "Living with HIV", content: "Tips and resources for managing life with HIV." },
    { title: "HIV Treatment Options", content: "Information on available treatments and medications." },
    { title: "Support Resources", content: "Where to find support groups and counseling services." },
    { title: "Preventive Care", content: "Guidelines on staying healthy and preventing infections." },
  ];

  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const cardVariants = {
    expanded: { scale: 1.05, transition: { duration: 0.3 } },
    collapsed: { scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-[500px]">
        <Image
          src="/child.jpeg"
          alt="Knowledge Center"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Knowledge Center
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl drop-shadow-md max-w-2xl">
            Access resources, articles, and guidance to support health and wellness.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-0 mt-16 space-y-12">
        {/* Search */}
        <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search articles, resources, or FAQs..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Articles */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                layout
                initial="collapsed"
                animate={expandedItems[index] ? "expanded" : "collapsed"}
                variants={cardVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                <p className={`text-gray-600 ${expandedItems[index] ? "line-clamp-none" : "line-clamp-3"}`}>
                  {article.content}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                  {expandedItems[index] ? "Collapse" : "Read More"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
