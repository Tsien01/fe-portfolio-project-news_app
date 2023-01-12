import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { getAllTopics } from "./utils/utils"


export function Search () {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTopic, setSearchTopic] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        getAllTopics()
            .then((data) => {
                setTopics(data)
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

    const handleOnChange = (event) => {
        const clickedButton = event.target.value
        setSearchTopic(clickedButton)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (searchTopic !== "") {
            navigate(`/articles/search/${searchTopic}`)
        }
    }

    return (
        <main>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Please select a topic to sort by: </legend>
                    <section>
                        {
                            topics.map((topic) => {
                                return (
                                    <label key={topic.slug}>{topic.slug}
                                        <input type="radio" name="" value={topic.slug} onChange={handleOnChange}></input>
                                    </label>
                                )
                            })
                        }
                    </section>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </main>
    )
}