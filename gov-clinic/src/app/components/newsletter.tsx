'use client';
import {useGetArticles} from "@/hooks/getArticles";
import Link from "next/link";

type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  readtime: string;

};


export default function Newsletter() {
  
  const { data } = useGetArticles();
  
  return (
    <section className="bg-sky-50 px-6 py-16"><div className="mx-auto max-w-6xl"><p className="eyebrow">Keep learning</p><h2 className="section-title">Latest from the knowledge centre</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{data?.articles?.slice(0, 3).map((article: Article) => <article key={article.id} className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider text-sky-700">{article.readtime || "Health resource"}</p><h3 className="mt-3 text-lg font-bold text-slate-900">{article.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{article.content}</p></article>)}</div><Link href="/knowledge-center" className="mt-8 inline-block font-semibold text-sky-700">Browse all articles →</Link></div>
    </section>
  );
}
