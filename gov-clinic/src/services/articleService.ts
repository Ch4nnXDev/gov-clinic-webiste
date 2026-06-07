import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:4000";

export const getAllArticles = async () => {
    const response = await axios.get(`${API_URL}/api/articles`);

    return response.data;
}