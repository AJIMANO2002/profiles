
import React from "react";
import './register.css';
import axios from 'axios';
import {useHistory} from "react-router-dom";



// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }

function Register() {

  const navigate = useHistory();

  const [user, setuser] = React.useState();
  const handleChange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:4000/register";
      const res = await axios.post(url, user);
      console.log(res);
      navigate("/login")

    } catch {

    }

  }


  
  return (
    <>
      <div class="wrapper">
        <h2>Registration</h2>
        <form onSubmit={handlesubmit}>
          <div class="input-box">
            <input type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              required />
          </div>
          <div class="input-box">
            <input type="text"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required />
          </div>
          <div class="input-box">
            <input type="password"
              name="password"
              onChange={handleChange}
              placeholder="Create password"
              required />
          </div>
          <div class="input-box">
            <input type="password"
              name="conformpassword"
              onChange={handleChange}
              placeholder="Confirm password"
              required />
          </div>
          <div class="policy">
            <input onChange={handleChange} type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div class="input-box button">
            <input onChange={handleChange} type="Submit" value="Register Now" />
          </div>

        </form>
      </div>
    </>
  )
}
export default Register
