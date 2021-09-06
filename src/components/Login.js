/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react'
import {Switch, Link} from "react-router-dom";
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from "./Blog";
import Rent from './Rent';
import { useHistory } from "react-router-dom";



 const login = () => {

// const [email, setEmail]=useState("");
// const [password, setPassword] = useState("");

//      const history = useHistory();
// useEffect(()=>{
// if (localStorage.getItem('user_info')){
//   history.push('/Signup')
// }
// },[]
// )
// function Loginn()
// {
//   console.warn(email, password)
//   let item={email, password}
// }
    return (
      <div className="login_box">
        <div className="short_box">
          <form onSubmit={(e) => Login(e)} action="/Ad.js">
            <div className="row">
              <div className="login_head">
                <div className="log_in_pak">Log in to PakBike</div>
              </div>
            </div>
            {/* <div className="col">
              <a href="#" className="phone btn">
                <i className="fa fa-phone fa-fw"></i>
                Continue with Mobile Number
              </a>
              <a href="#" className="facebook btn">
                <i className="fa fa-facebook fa-fw"></i>
                Continue with Facebook
              </a>
              <a href="#" className="google btn">
                <i className="fa fa-phone fa-fw"></i>
                Continue with Google
              </a>
            </div> */}
            <div className="col">
              {/* <div className="sign_manually">
                <p>Or</p>
              </div> */}
              <div className="username">
                <input
                  className="user_name"
                  type="text"
                  id="inputEmail"
                  name="username"
                  placeholder="Username"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password">
                <input
                  className="pass"
                  type="password"
                  name="password"
                  id="inputPassword"
                  placeholder="Password"
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="login">
                <a href="/Rent">
                  <input className="log" type="submit" value="Submit" />
                  {/* onClick={Loginn} */}
                </a>
              </div>
              {/* <div class="row">
                <div class="signup">
                  <a href="#">Sign up</a>
                </div>
                <div class="forgot">
                  <a href="#">Forgot password?</a>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    );
};
function Login(e){
 debugger
 localStorage.clear();
 if (window.location.href != 'http://localhost:3001/Login') {
   document.getElementById("loginButton").click();
 }
  e.preventDefault();
let request = {
  username: document.getElementById("inputEmail").value,
  password: document.getElementById("inputPassword").value,
}
localStorage.setItem("username",request.username)
axios.post("http://localhost:3000/user/login" , request)
 
.then( resp=>{
 console.log(resp)
 if (resp && resp.data && resp.data.token){
   localStorage.setItem("token", resp.data.token);
   // alert(resp.data.message);
   debugger;
    document.getElementById("homeId").click();
 }
})
.catch(err =>{
  console.log(err);
})
}
export default login;