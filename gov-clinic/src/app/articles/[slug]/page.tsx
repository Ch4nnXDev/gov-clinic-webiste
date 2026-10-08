import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getArticle } from "@/hooks/getArticle";

type ArticleProps = {
  params: Promise<{ slug: string }>;
};

export default async function Article({ params }: ArticleProps) {
  const { slug } = await params;

  const article = await getArticle(slug);

  if (!article) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-slate-600">Article not found.</p>
      </main>
    );
  }

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
    <main className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 m-20 p-5">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-14">
          <Link
            href="/knowledge-center"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Knowledge Centre
          </Link>

          <div className="mb-4 flex items-center gap-3 text-sm text-slate-500">
            {formattedDate && (
              <time dateTime={article.fields.date}>
                {formattedDate}
              </time>
            )}

            {article.fields.readTime && (
              <>
                <span>•</span>
                <span>{article.fields.readTime}</span>
              </>
            )}
          </div>

          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {article.fields.title}
          </h1>
        </div>
      </section>

      {/* Image */}
      {imageUrl && (
        <section className="mx-auto max-w-5xl px-6 pt-8 sm:px-8 sm:pt-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={imageUrl}
              alt={article.fields.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-10 sm:px-8 sm:py-14">
        <div className="text-base leading-8 text-slate-700 sm:text-lg">
          {documentToReactComponents(article.fields.content)}
        </div>
      </article>

      {/* Bottom navigation */}
      <div className="mx-auto max-w-3xl border-t border-slate-200 px-6 py-8 sm:px-8">
        <Link
          href="/knowledge-center"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Knowledge Centre
        </Link>
      </div>
    </main>
  );
}