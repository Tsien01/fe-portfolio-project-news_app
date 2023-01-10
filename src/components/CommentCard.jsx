

export function CommentCard ({ author, body, created_at, votes }) {
    return (
        <li>
            <h4>{author} at {created_at}</h4>
            <p>{body}</p>
            <p>{votes} votes</p>
        </li>
    )
}