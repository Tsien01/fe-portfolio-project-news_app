import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-api-qy3c.onrender.com/api", 
})

export const getAllArticles = () => {
    return newsApi.get("/articles")
        .then((data) => {
            return data.data.articles
        })
        .catch((error) => {
            console.log(error, "<-- ERROR");
        })
}