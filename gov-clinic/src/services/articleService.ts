import axios from "axios";

export const getAllArticles = async () => {
    const response = await axios.get("http://localhost:4000/api/articles");

    return response.data;
}