'use client'
import { useForm } from "react-hook-form";
import { useCreateArticles } from "@/hooks/getArticles";
type Article = {
  title: string,
  author: string,
  content: string,
  readTime: number
}

export default function CreateArticle() {
  const form = useForm<Article>();
  const createArticle = useCreateArticles();
  
  function onSubmit(data: Article){
    
    return createArticle.mutate(data);



  }

  
  return (
    <div className="h-screen ">
      <form className="h-full flex flex-col justify-center bg-gray-300 shadow:md ">
        <div className="flex flex-col p-2 space-x-6">
          <label htmlFor="Title">Title</label>
          <input placeholder="Title" {...form.register("title")} className="p-4 bg-gray-100 w-full"></input>

        </div>
        <div className="flex flex-col p-2 space-x-6">
          <label htmlFor="Author">Author</label>
          <input placeholder="Author" {...form.register("author")} className="p-4 bg-gray-100 w-full"></input>
        </div>
        <div className="flex flex-col p-2 space-x-6">
          <label htmlFor="Content">Content</label>
          <textarea placeholder="write your content here" {...form.register("content")} className="p-4 bg-gray-100 w-full"></textarea>
        </div> 
        <div className="flex flex-col p-2 space-x-6">
          <label htmlFor="readTime">Reading Time</label>
          <input placeholder="reading time" {...form.register("readTime")} className="p-4 bg-gray-100 w-full"></input>


        </div> 

        
        
        
      
        <button className="p-6 bg-blue-400 m-10" onClick={form.handleSubmit(onSubmit)}>
          submit
        </button>
        
        
      </form>

    </div>
  );
}