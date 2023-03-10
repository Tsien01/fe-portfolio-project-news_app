import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-api-qy3c.onrender.com/api", 
})

export const getAllArticles = (query) => {
    const params = new URLSearchParams()
    if (query.topic) {
        params.append("topic", query.topic)
    }
    params.append("sort_by", query.sort_by)
    params.append("order", query.order)
    const request = { params }
        return newsApi.get(`/articles`, request)
            .then(({ data }) => {
                return data.articles
            })
}
export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
        .then(({ data }) => {
            return data.article
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
            return data.comment
        })
}
export const getAllTopics = () => {
    return newsApi.get("/topics")
        .then(({ data }) => {
            return data.topics
        })
}
export const deleteCommentById = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`)
        .then(({ data }) => {
            return data.message
        })
}