import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./port/home";
import Register from "./port/register";
import Login from "./port/login";



function App() {

  return (

    
      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        
        
      </BrowserRouter>
    

  );
}

export default App;