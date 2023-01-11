import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getArticleById, incrementDecrementArticleVotes } from "./utils/utils"

import { CommentBar } from "./CommentBar"

export function ArticleDisplay () {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id)
            .then((data) => {
                console.log("hello from the useEffect");
                setArticle(data)
                setIsLoading(false)
            })
        
    }, [])

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    const handleOnClick = (event, isLike) => {
        event.preventDefault()
        const articleCopy = {...article}
        isLike ? articleCopy.votes++ : articleCopy.votes--
        setArticle(articleCopy)
        incrementDecrementArticleVotes(isLike, article_id)
            .catch(() => {
                    const resetVoteCopy = {...article}
                    isLike ? resetVoteCopy.votes-- : resetVoteCopy.votes++
                    setArticle(resetVoteCopy)
            })
    }

    return (
        <main>
            <h2>{article.title}</h2>
            <h3>Written by {article.author} on {article.created_at}</h3>
            <aside>{article.votes} votes</aside>
            <button onClick={(event) => {handleOnClick(event, true)}}>Like</button>
            <button onClick={(event) => {handleOnClick(event, false)}}>Dislike</button>
            <p>{article.body}</p>
            <aside>{article.topic}</aside>
            <CommentBar {...article}></CommentBar>
        </main>
    )
}