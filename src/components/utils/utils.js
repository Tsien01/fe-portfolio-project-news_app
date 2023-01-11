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
export const incrementDecrementArticleVotes = (isLike, article_id) => {
    const body = {
        inc_vote: isLike ? 1 : -1
    }
    return newsApi.patch(`/articles/${article_id}`, body)
        .then(({ data }) => {
            return data.article
        })
}
export const postNewComment = (article_id, username, commentText) => {
    const newComment = {
        username: username, 
        body: commentText, 
    }
    return newsApi.post(`/articles/${article_id}/comments`, newComment)
        .then(({ data }) => {
            return data.article
        })
}