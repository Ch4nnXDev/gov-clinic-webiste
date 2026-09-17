"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ChevronRight, Clock3, UserRound } from "lucide-react";
import {useGetArticles} from "@/hooks/getArticles";
import Link from "next/link";


type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  readtime: string;

};


const Blog = () => {
const {data, isLoading, isError} = useGetArticles();


  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Knowledge centre</p><h2 className="section-title">Health updates and news</h2></div><Link href="/knowledge-center" className="font-semibold text-sky-700 hover:text-sky-900">View all resources →</Link></div>

      {isLoading && <p className="mt-8 text-slate-500">Loading articles…</p>}{isError && <p className="mt-8 rounded-xl bg-amber-50 p-4 text-amber-800">Articles are temporarily unavailable. Please try again later.</p>}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data?.articles?.map((article: Article) => ( //optional chaining is aded with the question mark thun it check if the 1st oayer of the obhject exist ir itsa has articles and them go otherwuse it could crash
          <Card key={article.id} className="justify-between gap-0 rounded-2xl border-slate-200 py-0 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><CardHeader className="bg-sky-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-sky-700">Health resource</p></CardHeader><CardContent className="pt-6 pb-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500"><span className="flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />{article.readtime || "5 min read"}</span><span className="flex items-center gap-1"><UserRound className="h-3.5 w-3.5" />{article.author}</span></div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
                {article.title}
              </h3>

              <Button size="sm" variant="outline" className="mt-6 border-sky-200 text-sky-800 hover:bg-sky-50">
                Read article <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;
