import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [login,setLogin]=useState({
        username:"",
        password:""
    });

    const navigate=useNavigate();

    const handleChange = (e) =>{
      setLogin({
        ...login,
        [e.target.name]:e.target.value,
      });
    };

    const handleSubmit = async (e) =>{
      e.preventDefault();

      try {
        await axios.post("http://localhost:8080/user/create")
        alert("Login Successfull");

        setLogin({
          username:"",
          password:""
        });

        navigate("/customer")

      }catch(error) {
        console.log(error);
        alert("Login failed")
      }
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' placeholder='username' name="username" value={login.username} onChange={handleChange} required></input>
      <input type="pass" placeholder="password" name="password" value={login.password} onChange={handleChange} required></input>
      <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
