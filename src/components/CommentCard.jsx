import { useState } from "react"
import { deleteCommentById } from "./utils/utils"


export function CommentCard ({ comment_id, author, body, created_at, votes, setIsSending }) {
    const [isDeleting, setIsDeleting] = useState(false)
    
    const deleteComment = (event) => {
        event.preventDefault()
        const deletePromise = deleteCommentById(comment_id)
        const isDeletingPromise = setIsDeleting(true)
        const isSendingPromise = setIsSending(true)
        
        Promise.all([deletePromise, isDeletingPromise, isSendingPromise])
            .then(() => {
                setIsSending(false)
            })
            .catch((error) => {
                console.log(error, "<--- ERROR");
                setIsDeleting(false)
                setIsSending(false)
            })
    }

    if (isDeleting) {
        return (
            <li>
                <p>Deleting...</p>
            </li>
        )
    }

    return (
        <li>
            <h4>{author} at {created_at}</h4>
            <p>{body}</p>
            <p>{votes} votes</p>
            <button onClick={deleteComment}>Delete</button>
        </li>
    )
}