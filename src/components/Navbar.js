/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { cleanup } from "axe-core";
import { data } from "jquery";
import { FaSlidersH } from "react-icons/fa";
// import { RiUserSettingsFill } from "react-icons/si";
// import React, {useState, useEffect} from "react"

const Navbar = () => {
  
// const [input, setInput] = useState('')
// const [output, setOutput] = useState([]);

// useEffect(()=>{
// setOutput([])
// data.filter(val=>{
//   if (val.location.toLowerCase().includes(input.toLowerCase()))
//   {
//     setOutput(output=>[...output,val])
//   }
// })
  
// },[input])


  return (
    <nav className="navbar">
      {/* small nav bar upper */}
      <div className="navbar_upper_small">
        <ul className="navbar__left">
          <div className="navbar__left-logo">
            <a href="/Home">
              <img src="/images/logo.jpg" alt="logo" />
            </a>
          </div>
        </ul>
        {/* serachbar full in navabar */}
        {/* <div className="searchbar_in_nav">
          <div class="example_search_nav" action="/action_page.php">
            <input
          
              className="searchbar_search"
              type="text"
              placeholder="Search.."
              name="search"
            />
            <div className="button_in_nav_search">
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div> */}

        {/* Add show on navbar top */}
        <div className="AdLogoNav_div">
          <img src="/images/AdLogoNav.gif" alt="logo" />
        </div>
        {/* sign in signup in navbar upper */}
        <div className="nav">
          <div className="signin_nav">
            <a href="/Login">
              <button
                id= "loginButton"
                className="in button_login_signup"
                name="go"
                type="submit"
              >
                Login In
                {/* <a href="">Sign In</a> */}
              </button>
            </a>
          </div>

          <div className="signup_nav">
            <a href="/Signup">
              <button
              id="signupButton"
                className="up button_login_signup"
                name="go"
                type="submit"
              >
                Sign Up
                {/* <a href="">Sign In</a> */}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__right">
            {/* navbar home  */}
            {/* <li>
              <a href="">Home</a>
            </li> */}
            <div class="dropdown">
              <a href="/Home">
                <button className="dropbtn" id="homeId">Home</button>
              </a>
            </div>
            {/* new bikes nav bar */}
            <div class="dropdown">
              <a href="/Ad">
                <button className="dropbtn">
                  New Bikes
                  <i class="fa fa-caret-down"></i>
                  <span>&#9660;</span>
                </button>
              </a>
              <div class="dropdown-content">
                <a href="/Ad">Honda</a>
                <a href="/Ad">Suzuki</a>
                <a href="/Ad">Yamaha</a>
                <a href="/Ad">Hero</a>
                <a href="/Ad">United</a>
                <a href="/Ad">BMW</a>
                <a href="/Ad">Kawasaki</a>
                <a href="/Ad">Unique</a>
                <a href="/Ad">Hi Speed</a>
              </div>
            </div>
            {/* nav bar New Bike  */}
            <div class="dropdown">
              <a href="/Ad">
                <button class="dropbtn">
                  Used Bikes
                  <i class="fa fa-caret-down"></i>
                  <span>&#9660;</span>
                </button>
              </a>
              <div class="dropdown-content">
                <a href="/Ad">Honda</a>
                <a href="/Ad">Suzuki</a>
                <a href="/Ad">Yamaha</a>
                <a href="/Ad">Hero</a>
                <a href="/Ad">United</a>
                <a href="/Ad">BMW</a>
                <a href="/Ad">Kawasaki</a>
                <a href="/Ad">Unique</a>
                <a href="/Ad">Hi Speed</a>
              </div>
            </div>
            {/* for rent nav in nav bar drop down */}
            <div class="dropdown">
              <a href="/Rent">
                <button class="dropbtn">
                  Rent
                  <i class="fa fa-caret-down"></i>
                </button>
              </a>
            </div>
            {/* Nav bar Electric Bikes */}
            {/* <div class="dropdown">
              <a href="">
                <button class="dropbtn">
                  Electric Bikes
                  <i class="fa fa-caret-down"></i>
                  <span>&#9660;</span>
                </button>
              </a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> */}
            {/* tools navbar dropdown */}
            <div class="dropdown">
              <a href="/Parts">
                <button class="dropbtn">
                  Accessories
                  <i class="fa fa-caret-down"></i>
                </button>
              </a>
            </div>
            {/* nav bar Review */}
            {/* <div class="dropdown">
              <a href="">
                <button className="dropbtn">
                  Reviews
                  <i class="fa fa-caret-down"></i>
                </button>
              </a>
            </div> */}
            {/* Blogs in nav bar */}
            <div class="dropdown">
              <a href="/Blog">
                <button class="dropbtn">
                  Blogs
                  <i class="fa fa-caret-down"></i>
                </button>
              </a>
            </div>

            {/* About us in navbar */}
            <div class="dropdown">
              <a href="/Contactus">
                <button class="dropbtn">
                  Contact Us
                  <i class="fa fa-caret-down"></i>
                </button>
              </a>
            </div>

            {/* navbar Post ad button */}
            {/* <div className="">
              
                <button href="/Postadd" className="post_ad_navbar">Post Free Ad +</button>
              
            </div> */}
            {/*  */}
            {/* <div class="dropdown">
             
                <button className="post_ad_navbar">
                  Post Free Ad + <i class="fa fa-caret-down"></i>
                  <span>&#9660;</span>
                </button>
            
              <div class="dropdown-content">
                <a href="#">Honda</a>
              </div>
            </div> */}

            {/*  */}
            <div class="dropdown">
              <button className="post_ad_navbars button_poast_an_ad">
                <div className="post_ad_navbarr">
                  Post an Ad <span>&#9660;</span>
                </div>
              </button>
              <ul class="dropdown-content_ad_post">
                <li>
                  <a href="/PostAdd">Sell Bike</a>
                </li>
                <h1>____________</h1>
                <li>
                  <a href="/PostAccessories">Sell Accesories</a>
                </li>
                <h1>____________</h1>
                <li>
                  <a href="/Rentpostad">Rent a Bike</a>
                </li>
                <h1>____________</h1>
              </ul>
            </div>
            <div>
            
              <button className="set_buttoon sett_hover">
                <a href="/PostAdDetail">
                  <li className="but_setting ">
                    <FaSlidersH />
                    <div className="sett_keyword">Settings</div>
                  </li>
                </a>
              </button>
            </div>
          </ul>
        </div>

        {/* login details in navbar */}
      </div>
    </nav>
  );
};
export default Navbar;
