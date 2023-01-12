import { useState } from "react"


export function Search () {
    const [loadingState, setLoadingState] = useState(0)

    if (loadingState === 0) {
        return (
            <main>
                <h2>Search</h2>
            </main>
        )
    }
}