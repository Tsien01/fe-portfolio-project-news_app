import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getArticleById, getAllCommentsByArticle } from "./utils/utils"

import { CommentCard } from "./CommentCard"

export function ArticleDisplay () {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const articlePromise = getArticleById(article_id)
        const commentsPromise = getAllCommentsByArticle(article_id)

        Promise.all([articlePromise, commentsPromise])
            .then((data) => {
                console.log(data);
                setArticle(data[0])
                setComments(data[1])
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <main>
            <h2>{article.title}</h2>
            <h3>Written by {article.author} on {article.created_at}</h3>
            <p>{article.body}</p>
            <aside>{article.topic}</aside>
            <input type="checkbox" className="openCommentbarMenu" id="openCommentbarMenu"></input>
            <label htmlFor="openCommentbarMenu" className="commentIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
                <p className="commentButtonText">Click here to see comments!</p>
            </label>
            <ul className="sidebarMenuInner" id="commentbarMenu">
                {
                    comments.map((comment) => {
                        return (
                            <CommentCard key={comment.comment_id} {...comment}></CommentCard>
                        )
                    })
                }
            </ul>
        </main>
    )
}