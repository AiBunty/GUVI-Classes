import { useState } from "react";

function App() {
    //state vairable
    const [accepted, setAccepted] = useState<boolean>(false)

    const handleIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAccepted(event.target.checked)

    }

    return (
        <>
        <input
        type="checkbox"
        checked={accepted}
        onChange={handleIncrease}
        />

        <p>{accepted ? "Terms are Accepted" : "Not Accepted"}</p>

        </>
    )   
}   

export default App

// checkbox for accepting terms and conditions
