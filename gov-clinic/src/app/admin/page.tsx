'use client';
import { useDeleteAllArticles } from "@/hooks/getArticles";
import { Trash2 } from "lucide-react";



export default function Admin() {


    const deleteAll = useDeleteAllArticles();


    function onSubmit() {
        if (window.confirm("Delete every article? This cannot be undone.")) deleteAll.mutate();
    }
    
    return(
        <main className="px-6 pb-16 pt-32"><section className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-white p-7 shadow-sm sm:p-10"><Trash2 className="h-8 w-8 text-red-600" /><p className="eyebrow mt-5 text-red-700">Danger zone</p><h1 className="mt-1 text-2xl font-bold">Clear published articles</h1><p className="mt-3 leading-6 text-slate-600">This permanently removes every article in the knowledge centre. This action cannot be reversed.</p>{deleteAll.isSuccess && <p className="mt-5 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">All articles were deleted.</p>}{deleteAll.isError && <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-800">Could not delete articles. Try again.</p>}<button disabled={deleteAll.isPending} onClick={onSubmit} className="mt-7 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 disabled:opacity-60">{deleteAll.isPending ? "Deleting…" : "Delete all articles"}</button></section></main>
    );
}
