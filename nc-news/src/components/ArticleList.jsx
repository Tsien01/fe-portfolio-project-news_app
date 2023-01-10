import { useEffect, useState } from "react"
import { getAllArticles } from "./utils/utils"

import { ArticleCard } from "./ArticleCard"

export function ArticleList () {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState([true])

    useEffect(() => {
        getAllArticles().then((data) => {
            console.log(data);
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
            <h2>Latest articles</h2>
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