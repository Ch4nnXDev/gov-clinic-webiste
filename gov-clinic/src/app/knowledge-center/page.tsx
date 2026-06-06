"use client";
import { useGetArticles } from "@/hooks/getArticles";
import Image from "next/image";
import { motion } from "framer-motion";



export default function KnowledgeCenterPage() {
  const { data } = useGetArticles();

  type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  readTime: number;

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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Featured Articles
          </h2>
        <div className="bg-white p-3 rounded-xl shadow-md max-w-lg mx-auto">
          
          <input
            type="text"
            placeholder="Search articles, resources, or FAQs..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Articles */}
        <div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.articles?.map((article: Article) => (
              <motion.div
                key={article.id}
                layout
                initial="collapsed"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                <p className={`text-gray-600 `}>
                  {article.content}
                </p>
                <button
                  
                  className="mt-4 self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
