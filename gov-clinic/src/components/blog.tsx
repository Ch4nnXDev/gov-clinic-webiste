
import { getArticles } from "@/hooks/getArticle";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ChevronRight, Clock3 } from "lucide-react";
import Link from "next/link";

const Blog = async () => {
  const articles = await getArticles();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Knowledge centre</p>

          <h2 className="section-title">
            Health updates and news
          </h2>
        </div>

        <Link
          href="/knowledge-center"
          className="font-semibold text-sky-700 hover:text-sky-900"
        >
          View all resources →
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <Card
            key={article.sys.id}
            className="justify-between gap-0 rounded-2xl border-slate-200 py-0 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <CardHeader className="bg-sky-50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                {`${article.fields.title}`}
              </p>
            </CardHeader>

            <CardContent className="pb-6 pt-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" />
                  {`${article.fields.readTime}`}
                </span>
              </div>

              <Button
                asChild
                size="sm"
                variant="outline"
                className="mt-6 border-sky-200 text-sky-800 hover:bg-sky-50"
              >
                <Link href={`/articles/${article.fields.slug}`}>
                  Read article
                  <ChevronRight />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;