
import { useQuery } from "@tanstack/react-query";

export function useGetArticles() {
    return useQuery({
        queryKey: ["articles"],
        queryFn: getAllArticlesController
    })
}
