import axios from "axios";

type Article = {
    author: string,
    title: string,
    content: string,
    readTime: number
}
const API_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:4000";

export const getAllArticles = async () => {
    const response = await axios.get(`${API_URL}/api/articles`);

    return response.data;
}


export const createArticle = async (data: Article) => {
    const user = await axios.post(`${API_URL}/api/articles`, data);
    return user;
    
}

export const deleteAllArticles = async () => {
    const deletedCount = await axios.delete(`${API_URL}/api/articles/delete`);
    return deletedCount.data;
}