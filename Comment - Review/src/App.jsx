import { useState } from 'react'
import './App.css'

function App() {
  const userInfo = {
    name: "",
    password: "",
    email: "",
    gender: "",
    year: "",
  }
  
  const [form, setForm] = useState(userInfo)
  const { name, password, email, gender, year } = form
  
  const EventHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(e.target.value)
    console.log(e.target.name)
  }
  
  const formBtn = (e) => {
    e.preventDefault()
    console.log(form)
  }
  
  return (
    <>
      <div className="form-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-logo"
        />
        <h2>React form</h2>
        <form onSubmit={formBtn}>
          <label>Name</label>
          <input type="text" id="name" name="name" value={name} onChange={EventHandler} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={EventHandler} />

          <label>Email</label>
          <input type="email" id="email" name="email" value={email} onChange={EventHandler} />

          <label>Gender</label>
          <div className="gender-container">
            <label>
              <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={EventHandler} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={EventHandler} /> Female
            </label>
          </div>

          <label>Year</label>
          <select id="year" name="year" value={year} onChange={EventHandler}>
            <option value="year">year</option>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  )
}

export default App
