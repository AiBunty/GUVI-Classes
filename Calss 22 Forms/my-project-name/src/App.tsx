import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(`Form Submitted!\nName: ${formData.firstName} ${formData.lastName}\nRole: ${formData.role}`)
  }

  // Check if all fields are filled
  const isFormValid = formData.firstName.trim() !== '' && 
                      formData.lastName.trim() !== '' && 
                      formData.role !== ''

  return (
    <div className="app-container">
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={!isFormValid}
          className={isFormValid ? 'submit-btn' : 'submit-btn disabled'}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
