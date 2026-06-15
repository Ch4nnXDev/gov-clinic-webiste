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
    <>
    <form className="p- flex flex-col justify-center items-center m-50 bg-gray-300 shadow:md ">
      <div className="flex flex-row p-2">
        <label htmlFor="Title">Title</label>
        <input placeholder="Title" {...form.register("title")} className="p-4 bg-gray-100"></input>

      </div>
      <div className="flex flex-row p-2">
        <label htmlFor="Author">Author</label>
        <input placeholder="Author" {...form.register("author")} className="p-4 bg-gray-100"></input>
      </div>
      <div className="flex flex-row p-2">
        <label htmlFor="Content">Content</label>
        <input placeholder="write your content here" {...form.register("content")} className="p-4 bg-gray-100"></input>
      </div> 
      <div className="flex flex-row p-2">
         <label htmlFor="readTime">Reading Time</label>
        <input placeholder="reading time" {...form.register("readTime")} className="p-4 bg-gray-100"></input>


      </div> 

      
      
      
     
      <button className="p-6 bg-blue-400 m-10" onClick={form.handleSubmit(onSubmit)}>
        submit
      </button>
      
      
    </form>

    </>
  );
}