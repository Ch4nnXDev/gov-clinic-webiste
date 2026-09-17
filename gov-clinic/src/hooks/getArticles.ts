import { getAllArticles, createArticle, deleteAllArticles } from "../services/articleService";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetArticles() {
    return useQuery({
        queryKey: ["articles"],
        queryFn: getAllArticles,
        retry: 1
    })
};

export function useCreateArticles() {
    return useMutation({
       mutationFn: createArticle
})
};

export function useDeleteAllArticles() {
    return useMutation({
        mutationFn: deleteAllArticles
        
        
    })
};
