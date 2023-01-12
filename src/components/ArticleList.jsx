import { useEffect, useState } from "react"
import { getAllArticles } from "./utils/utils"

import { ArticleCard } from "./ArticleCard"

export function ArticleList () {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentlySortedBy, setCurrentlySortedBy] = useState("created_at")
    const [orderedBy, setOrderedBy] = useState("desc")

    useEffect(() => {
        setIsLoading(true)
        const query = {}
        switch (currentlySortedBy) {
            case "created_at": 
                query.sort_by = "created_at"
                break;
            case "comment_count": 
                query.sort_by = "comment_count"
                break;
            case "votes": 
                query.sort_by = "votes"
                break;
            case "author": 
                query.sort_by = "author"
                break;
            case "title": 
                query.sort_by = "title"
                break;
        }
        orderedBy === "desc" ? query.order = "desc" : query.order = "asc";
        getAllArticles(query).then((data) => {
            console.log(data);
            setArticles(data)
            setIsLoading(false)
        })
    }, [currentlySortedBy, orderedBy])

    if (isLoading) {
        return (
            <main>
                <p>Loading...</p>
            </main>
        )
    }
    const handleSortOnChange = (event) => {
        setCurrentlySortedBy(event.target.value)
    }

    const handleOrderOnChange = (event) => {
        setOrderedBy(event.target.value)
    }

    return (
        <main>
            <h2>Latest articles</h2>
            <form>
                <fieldset className="sortOptionsBar">
                    <legend>Sort by: </legend>
                    <input className="sortOptions" type="radio" name="sortOptions" id="created_at" value="created_at" checked={currentlySortedBy === "created_at"} onChange={handleSortOnChange}></input>
                    <label htmlFor="created_at">Date</label>
                    
                    <input className="sortOptions" type="radio" name="sortOptions" id="comment_count" value="comment_count" checked={currentlySortedBy === "comment_count"} onChange={handleSortOnChange}></input>
                    <label htmlFor="comment_count">Comment Count</label>
                    
                    <input className="sortOptions" type="radio" name="sortOptions" id="votes" value="votes" checked={currentlySortedBy === "votes"} onChange={handleSortOnChange}></input>
                    <label htmlFor="votes">Votes</label>
                    
                    <input className="sortOptions" type="radio" name="sortOptions" id="author" value="author" checked={currentlySortedBy === "author"} onChange={handleSortOnChange}></input>
                    <label htmlFor="author">Author</label>
                    
                    <input className="sortOptions" type="radio" name="sortOptions" id="title" value="title" checked={currentlySortedBy === "title"} onChange={handleSortOnChange}></input>
                    <label htmlFor="title">Title</label>
                </fieldset>
                <fieldset className="sortOptionsBar">
                    <legend>Order by: </legend>
                    <input className="sortOptions" type="radio" name="orderBy" id="desc" value="desc" checked={orderedBy === "desc"} onChange={handleOrderOnChange}></input>
                    <label htmlFor="desc">Descending</label>
                    
                    <input className="sortOptions" type="radio" name="orderBy" id="asc" value="asc" checked={orderedBy === "asc"} onChange={handleOrderOnChange}></input>
                    <label htmlFor="asc">Ascending</label>
                </fieldset>
            </form>
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