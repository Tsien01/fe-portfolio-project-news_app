import { Link } from "react-router-dom"

export function ArticleCard ({ article_id, title, author, created_at, topic }) {
    return (
        <li className="articleCard">
            <Link to={`/articles/${article_id}`} className="articleCardLinks">
                <h3 className="articleTitle">{title}</h3>
            </Link>
            <Link to={`/users/${author}`}>
                <h4 className="articleAuthor">Written by {author}</h4>
            </Link>
            <h4 className="articleDate">Published: {created_at}</h4>
            <h4 className="articleTopic">{topic}</h4>
        </li>
    )
}