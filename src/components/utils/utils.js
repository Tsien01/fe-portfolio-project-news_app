import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-api-qy3c.onrender.com/api", 
})

export const getAllArticles = () => {
    return newsApi.get("/articles")
        .then(({ data }) => {
            return data.articles
        })
        .catch((error) => {
            console.log(error, "<--- ERROR");
        })
}
export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
        .then(({ data }) => {
            return data.article
        })
        .catch((error) => {
            console.log(error, "<--- ERROR");
        })
}
export const getAllCommentsByArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
        .then(({ data }) => {
            return data.comments
        })
        .catch((error) => {
            console.log(error, "<--- ERROR");
        })
}