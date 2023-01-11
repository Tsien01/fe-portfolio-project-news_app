import { useState } from "react"
import { postNewComment } from "./utils/utils"

export function NewCommentInput ({ article_id, isSending, setIsSending }) {
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event, username) => {
        event.preventDefault()
        const postingPromise = postNewComment(article_id, username, newComment)
        const statePromise = setIsSending(true)

        Promise.all([postingPromise, statePromise])
            .then(() => {
                setIsSending(false)
                setNewComment("")
            })
    }

    if (isSending) {
        return (
            <p>Sending comment...</p>
        )
    }

    return (
        <form onSubmit={(event) => {handleSubmit(event, "cooljmessy")}}>
            <label>New Comment:
                <input type="text" value={newComment} onChange={(event) => {setNewComment(event.target.value)}}></input>
            </label>
            <button type="submit">Submit comment</button>
        </form>

    )
}