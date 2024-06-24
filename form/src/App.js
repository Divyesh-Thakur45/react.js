import { useState } from "react";
import './App.css';

function App() {
  const formInfo = {
    name : "",
    email : "",
    password : "",
    city : "",
    gender : "",
    isMarried : false,
  }

  const [form,setForm] = useState(formInfo)
  console.log(form)
  // D - Structure
  const {name,email,password,city,gender} = form
  
  const handleChange = (e) =>{
    e.preventDefault()
  }

  const valueGet = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(e.target.value)
    console.log(e.target.name)
  }

  return (
    <div className="App">
      <h1>Form</h1>
      <form action="" onSubmit={(e)=>handleChange(e)}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          name="name"
          onChange={(e)=>valueGet(e)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          name="email"
          onChange={(e)=>valueGet(e)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          name="password"
          onChange={(e)=>valueGet(e)}
        />
        <br />
        <select name="city" value={city} id="" onChange={(e)=>valueGet(e)}>
          <option value="Surat">Surat</option>
          <option value="Banglor">Banglor</option>
          <option value="Goa">Goa</option>
        </select>
        <br />
        <div className="gender">
          <input
            type="radio"
            name="gender"
            value={gender}
            id=""
            onChange={(e)=>valueGet(e)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value={gender}
            id=""
            onChange={(e)=>valueGet(e)}
          />
        </div>
        Female <br />
        <input
          type="checkbox"
          name="isMarried"
          onChange={(e)=>valueGet(e)}
        />
        isMarried <br />
        <button>Submite</button>
      </form>
    </div>
  );
}

export default App;
