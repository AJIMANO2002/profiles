import React from "react";
import './login.css';
import axios from 'axios';
import {useHistory} from "react-router-dom"


function Login(props) {

  const navigate = useHistory();
  const [user, setuser] = React.useState();
  const handleChange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:4000/login";
      const res = await axios.post(url, user);
      localStorage.setItem("auth",JSON.stringify(res));
      console.log(res)
       navigate("/home")
      
    } catch {
         console.log()
    }

  }
  return (
    <>
      <div className="wrapper">
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>
          <div className="input-box">
            <input type="text"
              name="email"
              onChange={handleChange}
              placeholder="Enter your Email" required />
          </div>
         
          <div className="input-box">
            <input type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required />
          </div>
         
          <div className="input-box button">
            <input onChange={handleChange} type="Submit" value="Continue" />
          </div>

        </form>
      </div>
    </>

    
  )
}
export default Login

