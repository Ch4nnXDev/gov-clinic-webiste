import { Badge } from "./ui/badge";
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
import Image from "next/image";

const Blog = () => {
const articles = [
  {
    title: "Understanding HIV: Myths vs Facts",
    category: "HIV Awareness",
    readTime: "6 min read",
    description:
      "Many misunderstandings surround HIV. Learn what is true, what is outdated, and how modern treatment supports long, healthy lives.",
    imageUrl: "/hiv-awareness.jpg",
  },
  {
    title: "How to Access Free HIV Testing in Sri Lanka",
    category: "Community Health",
    readTime: "4 min read",
    description:
      "Testing is confidential and widely accessible. Know where to go, what to expect, and how your privacy is protected.",
    imageUrl: "/clinic-testing.jpg",
  },
  {
    title: "What to Know About PrEP and PEP",
    category: "Prevention",
    readTime: "5 min read",
    description:
      "PrEP and PEP are highly effective HIV prevention medications. Learn who can use them, how they work, and where to receive them.",
    imageUrl: "/prep-pep.jpg",
  },
  {
    title: "Sexual Health for Couples: Building Trust and Communication",
    category: "Relationships",
    readTime: "7 min read",
    description:
      "Healthy relationships grow through open communication. Understand consent, boundaries, and safe intimacy.",
    imageUrl: "/couples-health.jpg",
  },
];

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
        {articles.map((article, i) => (
          <Card key={i} className="shadow-none overflow-hidden rounded-md py-0">
            <CardHeader className="p-0">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={400}
                height={200}
                className="aspect-video w-full object-cover"
              />
            </CardHeader>

            <CardContent className="pb-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  {article.category}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  {article.readTime}
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {article.title}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {article.description}
              </p>

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
