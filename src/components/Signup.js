import React from 'react'
import {Switch, Link} from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";



 const Signup = () => {
   // const history = useHistory();

   // const handleClick = () => {
   //   history.push("/Rent");
   // }; onClick={handleClick}
   return (
     <div className="Signup">
       <div className="container">
         <div className="signup_box">
           <form onSubmit={(e) => signup(e)}>
             <div className="small_box">
               <div className="login_head">
                 <h1 className="signup_headeinhg">Sign up to PakBike</h1>
               </div>
               <div className="box">
                 <input
                   className="nam"
                   type="text"
                   id="inputUsername"
                   placeholder="username"
                   name="nam"
                   required
                 />
                 <input
                   className="enter_email"
                   type="text"
                   id="inputEmail"
                   placeholder="Email"
                   name="email"
                   required
                 />
                 <input
                   className="phonee"
                   type="text"
                   id="inputPhone"
                   placeholder="Phone Number"
                   name="phoneeee"
                   required
                 />
                 <input
                   className="passo"
                   type="password"
                   id="inputPassword"
                   placeholder="Password"
                   name="psw"
                   required
                 />
                 <input
                   className="pass_repeat"
                   type="password"
                   id="inputConfirmPassword"
                   placeholder="Confirm Password"
                   name="psw-repeat"
                   required
                 />
               </div>
               <div className="remember">
                 {/* <label>
                    <input
                      className="remember"
                      type="checkbox"
                      checked="checked"
                      name="remember"
                    />
                    Remember me
                  </label> */}
               </div>
               <div className="term_privacy">
                 <p>
                   By creating an account you agree to our
                   <a href="#">Terms & Privacy</a>.
                 </p>
               </div>

               <div class="clearfix">
                 {/* <button type="button" class="cancelbtn">
                    Cancel
                  </button> */}
                 {/* <button type="submit" class="signupbtn">
                    Sign Up
                  </button> */}
                 <a>
                   <input
                     href="/Ad"
                     className="signupbtn"
                     type="Submit"
                     value="Submit"
                    />
                 </a>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
 }


function signup(e) {
  debugger;
  e.preventDefault();
  let request = {
    username: document.getElementById("inputUsername").value,
    email: document.getElementById("inputEmail").value,
    phone: document.getElementById("inputPhone").value,
    password: document.getElementById("inputPassword").value,
    confirmPassword: document.getElementById("inputConfirmPassword").value,
  };
  axios
    .post("http://localhost:3000/user/signup", request)
    .then((resp) => {
      console.log(resp.data)
      alert(resp.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
}
export default Signup;

