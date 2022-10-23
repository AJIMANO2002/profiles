import React,{useEffect,useState} from "react";
import "./home.css";
import axios from "axios";
import { AiOutlineUser } from "react-icons/ai";



function Home() {
    const [user, setuser] = React.useState([]);
    const handleChange = ({ target: { name, value } }) => {
      setuser({ ...user, [name]: value });
    }
    const handlesubmit = async (e) => {
      e.preventDefault()
      try {
        const url = "http://localhost:4000/registerDetails";
        const res = await axios.get(url, user);
        
           
        console.log(res);
      } catch {
      }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <h1>My Profile</h1>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler-icon"></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                               
                                <a className="nav-link" aria-current="page" href="#"> <AiOutlineUser className="icon"/>    Ajith</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container-card">
                <div className="card">

                    <form onSubmit={handlesubmit}>
                        {/* {user.map((details) => {
                                    return (
                                        <tr>
                                            
                                            <th>{details.name}</th>
                                            <th>{details.email}</th>
                                            <th>{details.password}</th>
                                        </tr>
                                    )
                                })} */}


                        <div class="inputbox">
                            <input type="text"
                                name="name"
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required />
                        </div>
                        <div class="inputbox">
                            <input type="text"
                                name="email"
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required />
                        </div>
                        <div class="inputbox">
                            <input type="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="Create password"
                                required />
                        </div>
                       
                        <div class="inputbox button">
                            <input type="Submit" value="Save" />
                        </div>


                    </form>
                </div>


            </div>






        </>
    )
}
export default Home