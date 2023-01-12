import { useState, useEffect } from "react"

import { getAllArticles } from "./utils/utils"

import { ArticleCard } from "./ArticleCard"
import { useParams } from "react-router"


export function FilteredArticleList () {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { topic } = useParams()

    useEffect(() => {
        getAllArticles({ topic }).then((data) => {
            setArticles(data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
            <main>
                <p>Loading...</p>
            </main>
        )
    }

    return (
        <main>
            <h2>Articles on {topic}</h2>
            <ul className="articleList">
                {
                    articles.map((article) => {
                        return <ArticleCard key={article.article_id} {...article}></ArticleCard>
                    })
                }
            </ul>
        </main>
    )
}