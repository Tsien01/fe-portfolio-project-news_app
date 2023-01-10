import { useState, useEffect } from "react"

export function ArticleDisplay () {
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

    }, [])

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <main>
            <h2>Article Title</h2>
            <p>Article Body</p>
        </main>
    )
}