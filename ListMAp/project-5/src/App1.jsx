import React, { useState } from 'react'

const App1 = () => {
  const [formData, setFormData] = useState({name: "", email: ""});
    return (
    <>
    <label htmlFor="name">Enter name</label>
    <input type="text" value={formData.name} onChange={(event) =>{
        setFormData({
            ...formData,
            name: event.target.value
        })
    }} />
    <label htmlFor="email">Enter the Email</label>
    <input type="text" value={formData.email} onChange={(event) => {
        setFormData({...formData, email: event.target.value})
    }} />
    <h1>{formData.name}</h1>
    <h2>{formData.email}</h2>
    </>
  )
}

export default App1
