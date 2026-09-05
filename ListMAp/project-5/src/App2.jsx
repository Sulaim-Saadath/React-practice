import React, { useState } from "react";

const App2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    role: "",
  });
  const [submitData, setSubmitData] = useState(null);
  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setFormData({ ...formData, name: event.target.value });
        break;
      case "email":
        setFormData({ ...formData, email: event.target.value });
        break;
      case "message":
        setFormData({ ...formData, message: event.target.value });
        break;
      case "role":
        setFormData({ ...formData, role: event.target.value });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitData(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name</label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Enter email</label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="address">Enter the Address</label>
        <textarea
          name="message"
          id="address"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <br />
        <label htmlFor="role"></label>
        <select
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="Developer">Developer</option>
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitData && (
        <>
          <h1>{submitData.name}</h1>
          <h1>{submitData.email}</h1>
          <h1>{submitData.message}</h1>
          <h1>{submitData.role}</h1>
        </>
      )}
    </>
  );
};

export default App2;
