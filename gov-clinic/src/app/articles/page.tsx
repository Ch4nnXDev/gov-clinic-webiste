import { useForm } from "react-hook-form";

type Article = {
  title: string,
  author: string,
  content: string,
  readTime: number
}

export default function CreateArticle() {
  const form = useForm<Article>();
  return (
    <>
    <form>
      <label htmlFor="Title">Title</label>
      <input placeholder="Title" {...form.register("title")}></input>
      <label htmlFor="Author">Author</label>
      <input placeholder="Author" {...form.register("author")}></input>
      <label htmlFor="Content">Content</label>
      <input placeholder="write your content here" {...form.register("content")}></input>
      <label htmlFor="readTime">Reading Time</label>
      <input placeholder="reading time" {...form.register("readTime")}></input>

      <button className="p-6 bg-blue-400 m-10">
        submit
      </button>
      
      
    </form>

    </>
  );
}