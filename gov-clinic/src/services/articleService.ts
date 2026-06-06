import axios from "axios";

export const getAllArticles = async () => {
    const response = await axios.get("/api/articles");

    return response.data;
}