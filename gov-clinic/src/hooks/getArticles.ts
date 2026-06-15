import { getAllArticles, createArticle, deleteAllArticles } from "../services/articleService";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetArticles() {
    return useQuery({
        queryKey: ["articles"],
        queryFn: getAllArticles
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