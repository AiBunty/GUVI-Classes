import { useState } from 'react'

function App() {
  const [email, setEmail] = useState<String>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(`Submit the email: ${email}`)

  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Enter your username"
      value={email} 
      onChange={handleChange} 
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default App