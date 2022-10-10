import { useState } from "react"

function Form() {
    const [search, setSerach] = useState("")

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                console.log(e.target.search.value)
            }}
        >
            <input
                type="text"
                name="search"
                autoComplete="off"
                value={search}
                onChange={e => setSerach(e.target.value)}
            />
            <button type="submit">Search</button>
            <p>Resultados para: {search}</p>
        </form>
    )
}

export default Form