import { useState } from "react"

function Form2() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const errorMessage = validate(email, password)

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                login(email, password);
            }}
        >
            <input
                type="email"
                name="search"
                autoComplete="off"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" disabled={errorMessage}>Inciar Sesion</button>
            <p>{errorMessage}</p>
        </form>
    )
}

const login = (email, password) => {
    if (email === "popa@gmail.com" && password === '1234') {
        return alert('Logueado')
    } else {
        return alert('No Logueado')
    }
}

const validate = (email, password) => {
    if (!email.includes("@")) return 'Email Incorrecto';
    if (password.length < 4) return 'the password must contain more than 4 digits';


}

export default Form2