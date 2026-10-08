import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronRight, Clock3 } from "lucide-react";

import { getArticles } from "@/hooks/getArticle";

export default async function KnowledgeCenterPage() {
  const articles = await getArticles();

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
          <p className="eyebrow text-sky-200">
            Learn with confidence
          </p>

          <h1 className="display text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
            Knowledge Center
          </h1>

          <p className="mt-2 max-w-2xl text-lg text-white drop-shadow-md md:text-xl">
            Access resources, articles, and guidance to support health and
            wellness.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="section-title text-center">
          Featured articles
        </h2>

        {articles.length === 0 ? (
          <p className="mt-10 text-center text-slate-500">
            No articles are currently available.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const image = article.fields.image;

              const imageUrl =
                image &&
                "fields" in image &&
                image.fields.file?.url
                  ? `https:${image.fields.file.url}`
                  : null;

              const formattedDate = article.fields.date
                ? new Date(article.fields.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : null;

              return (
                <article
                  key={article.sys.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Article Image */}
                  {imageUrl ? (
                    <Link
                      href={`/knowledge-center/${article.fields.slug}`}
                      className="relative block aspect-[16/9] overflow-hidden bg-slate-100"
                    >
                      <Image
                        src={imageUrl}
                        alt={article.fields.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <div className="flex aspect-[16/9] items-center justify-center bg-slate-100">
                      <BookOpen className="h-10 w-10 text-slate-400" />
                    </div>
                  )}

                  {/* Article Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                      {formattedDate && (
                        <time dateTime={article.fields.date}>
                          {formattedDate}
                        </time>
                      )}

                      {article.fields.readTime && (
                        <>
                          <span>•</span>

                          <span className="flex items-center gap-1">
                            <Clock3 className="h-3.5 w-3.5" />
                            {article.fields.readTime}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-900">
                      {article.fields.title}
                    </h3>

                    <div className="mt-auto pt-6">
                      <Link
                        href={`/articles/${article.fields.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 transition-all group-hover:gap-2 group-hover:text-sky-800"
                      >
                        Read article
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}