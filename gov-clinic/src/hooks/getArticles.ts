import { getAllArticles } from "../services/articleService";
import { useQuery } from "@tanstack/react-query";

export function useGetArticles() {
    return useQuery({
        queryKey: ["articles"],
        queryFn: getAllArticles
    })
}
