import { useState, useEffect } from "react"

import { getAllCommentsByArticle } from "./utils/utils"

import { CommentCard } from "./CommentCard"
import { NewCommentInput } from "./NewCommentInput"


export function CommentBar ({ article_id }) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        getAllCommentsByArticle(article_id)
            .then((data) => {
                setComments(data)
                setIsLoading(false)
            })
    }, [isSending])

    return (
        <section id="commentBar">
            <input type="checkbox" className="openCommentbarMenu" id="openCommentbarMenu"></input>
            <label htmlFor="openCommentbarMenu" className="commentIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
                <p className="commentButtonText">Click here to see comments!</p>
            </label>
            <section className="sidebarMenuInner" id="commentbarMenu">
                <h3>Comments</h3>
                <NewCommentInput article_id={article_id} isSending={isSending} setIsSending={setIsSending}></NewCommentInput>
                <ul>
                    { isLoading ? <li>Loading...</li> : (
                        comments.map((comment) => {
                            return (
                                <CommentCard key={comment.comment_id} {...comment}></CommentCard>
                            )
                        })
                    )
                    }
                </ul>
            </section>
        </section>
    )
}