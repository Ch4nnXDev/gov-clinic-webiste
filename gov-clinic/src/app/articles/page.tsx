'use client'
import { useForm } from "react-hook-form";
import { useCreateArticles } from "@/hooks/getArticles";
import { PenLine } from "lucide-react";
type Article = {
  title: string,
  author: string,
  content: string,
  readTime: string
}

export default function CreateArticle() {
  const form = useForm<Article>();
  const createArticle = useCreateArticles();
  
  function onSubmit(data: Article){
    
    createArticle.mutate(data, { onSuccess: () => form.reset() });
  }

  
  return (
    <main className="px-6 pb-16 pt-32"><form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10"><div className="flex items-center gap-3"><PenLine className="text-sky-700" /><div><p className="eyebrow">Content manager</p><h1 className="text-2xl font-bold">Create an article</h1></div></div><div className="mt-8 grid gap-5"><label className="grid gap-2 text-sm font-semibold">Title<input required placeholder="Article title" {...form.register("title")} className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-sky-500" /></label><label className="grid gap-2 text-sm font-semibold">Author<input required placeholder="Author name" {...form.register("author")} className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-sky-500" /></label><label className="grid gap-2 text-sm font-semibold">Content<textarea required rows={7} placeholder="Write the article here…" {...form.register("content")} className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-sky-500" /></label><label className="grid gap-2 text-sm font-semibold">Reading time<input required placeholder="e.g. 5 min read" {...form.register("readTime")} className="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-sky-500" /></label></div>{createArticle.isSuccess && <p className="mt-5 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">Article created successfully.</p>}{createArticle.isError && <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-800">Could not create the article. Please try again.</p>}<button disabled={createArticle.isPending} className="mt-7 rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white disabled:opacity-60">{createArticle.isPending ? "Publishing…" : "Publish article"}</button></form></main>
  );
}
