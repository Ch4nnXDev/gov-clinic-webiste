"use client";
import { useGetArticles } from "@/hooks/getArticles";
import Image from "next/image";
import { BookOpen, Clock3, Search } from "lucide-react";
import { useState } from "react";



export default function KnowledgeCenterPage() {
  const { data, isLoading, isError } = useGetArticles();
  const [query, setQuery] = useState("");

  type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  readtime: string;

};

  return (
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-80 w-full sm:h-[26rem]">
        <Image
          src="/child.jpeg"
          alt="Knowledge Center"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/55 px-6 pt-16 text-center">
          <p className="eyebrow text-sky-200">Learn with confidence</p><h1 className="display text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
            Knowledge Center
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl drop-shadow-md max-w-2xl">
            Access resources, articles, and guidance to support health and wellness.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Search */}
          <h2 className="section-title text-center">Featured articles</h2>
        <div className="relative mx-auto mt-8 max-w-xl"><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles and resources..."
            className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 shadow-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          />
        </div>

        {/* Articles */}
        <div className="mt-10">{isLoading && <p className="text-center text-slate-500">Loading resources…</p>}{isError && <p className="rounded-xl bg-amber-50 p-4 text-center text-amber-800">Resources are currently unavailable.</p>}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data?.articles?.filter((article: Article) => `${article.title} ${article.content}`.toLowerCase().includes(query.toLowerCase())).map((article: Article) => (
              <article
                key={article.id}
                className="flex min-h-64 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div><BookOpen className="h-7 w-7 text-sky-700" /><h3 className="mt-5 text-xl font-semibold text-slate-900">{article.title}</h3><p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">
                  {article.content}
                </p></div><p className="mt-5 flex items-center gap-1 text-xs font-medium text-slate-500"><Clock3 className="h-3.5 w-3.5" />{article.readtime || "5 min read"}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
