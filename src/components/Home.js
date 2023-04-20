import React from "react";
import { name, city } from "../data/data.js";


function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h1 style={{color:"firebrick"}}>Your Name is a Web Developer from Your City</h1>
    <h2>{name}</h2>
    <h4>{city}</h4>
  </div>
  )
}

export default Home;
 