"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import {useGetArticles} from "@/hooks/getArticles";
import Image from "next/image";


type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  readTime: number;

};


const Blog = () => {
const {data} = useGetArticles();


  return (
    <div className="max-w-(--breakpoint-xl) mx-auto py-16 px-6 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Health Updates and News</h2>

        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.articles?.map((article: Article) => ( //optional chaining is aded with the question mark thun it check if the 1st oayer of the obhject exist ir itsa has articles and them go otherwuse it could crash
          <Card key={article.id} className="shadow-none overflow-hidden rounded-md py-0">
            <CardHeader className="p-0">
              <Image
                src=""
                alt={article.title}
                width={400}
                height={200}
                className="aspect-video w-full object-cover"
              />
            </CardHeader>

            <CardContent className="pb-6">
              <div className="flex items-center gap-3">
                <span className="font-medium text-xs text-muted-foreground">
                  {article.readTime}
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {article.title}
              </h3>

              <Button size="sm" className="mt-6 shadow-none">
                Read more <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
