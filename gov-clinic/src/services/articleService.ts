import axios from "axios";

export type ArticleInput = {
    author: string,
    title: string,
    content: string,
    readTime: string
}
const API_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:4000";

export const getAllArticles = async () => {
    const response = await axios.get(`${API_URL}/api/articles`);

    return response.data;
}


export const createArticle = async (data: ArticleInput) => {
    const response = await axios.post(`${API_URL}/api/articles`, data);
    return response.data;
    
}

export const deleteAllArticles = async () => {
    const deletedCount = await axios.delete(`${API_URL}/api/articles/delete`);
    return deletedCount.data;
}
