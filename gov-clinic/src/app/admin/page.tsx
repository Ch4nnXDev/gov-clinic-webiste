'use client';
import { useDeleteAllArticles } from "@/hooks/getArticles";



export default function Admin() {


    const deleteAll = useDeleteAllArticles();


    function onSubmit() {
        deleteAll.mutate();
    }
    
    return(
        <section className="h-full flex flex-col p-8 m-10">
            <div className="p-4 flex flex-col bg-blue-399">
                lknlkndsflnadflkn


            </div>
            <button onClick={onSubmit}>
                Delete all articles
            </button>

        </section>
    );
}