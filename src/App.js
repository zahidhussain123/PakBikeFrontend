/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';
import "./Searchbar.css";
import "./login.css";
import "./Signup.css";
import "./Contactus.css";
import "./Postadd.css";
import "./Blog.css";
import "./Rent.css";
import "./Slider.css";
import "./Rentsearchbar.css";
import "./Parts.css";
import "./Foot.css";
import "./LatestAdd.css";
import "./Accessories.css";
import "./Ad.css";
import "./Accessoriespage.css";
import "./rentAd.css";
import "./rentPage.css";
import "./Rentpostad.css";
import "./Openad.css";
import "./PostAdDetail.css";
import "./Adtyre.css";

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Login from  './components/Login';
import Signup from "./components/Signup";
import Rentpage from "./components/Rentpage";
import Searchbar from "./components/Searchbar";
import Contactus from "./components/Contactus";
import Postadd from "./components/Postadd";
import Blog from "./components/Blog";
import Rent from "./components/Rent";
import Home from "./components/Home";
import Rentsearchbar from "./components/Rentsearchbar";
import Parts from "./components/Parts";
import Foot from "./components/Foot";
import LatestAdd from "./components/LatestAdd";
import Accessories from "./components/Accessories";
import Ad from "./components/Ad";
import Slider from "./components/Slider";
import Openad from "./components/Openad";
import Rentadd from "./components/Rentadd";
import Rentpostad from "./components/Rentpostad";
import Nodefetc from "./components/Nodefetc";
import Accessoriespage from "./components/Accessoriespage";
import PostAdDetail from "./components/PostAdDetail";
import OpenRentAd from "./components/OpenRentAd";
import AboutusRentPage from "./components/AboutusRentPage";
import OpenAccessories from "./components/OpenAccessories";
import PostAccessories from "./components/PostAccessories";
import AccessShowmore from "./components/AccessShowmore";
import Setting from "./components/Setting";
import PostRentDetail from "./components/PostRentDetail";
import PostAccessDetails from "./components/PostAccessDetails";
import Contactusmessage from "./components/Contactusmessage";
import Adtyre from "./components/Adtyre";



import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
function App() {
   localStorage.clear();
  return (
    <div>
      {/* <Banner /> */}
      <Navbar />

      {/* <Services />
      <Searchbar /> 
       */}
      <Router>
        <Switch>
          <Route path="/Login">
            <Banner />
            <Foot />
            <Login />
          </Route>
          <Route path="/PostAccessories">
            <PostAccessories />
          </Route>
          <Route path="/Contactusmessage">
            <Contactusmessage />
          </Route>
          <Route path="/Adtyre">
            <Adtyre />
          </Route>
          <Route path="/PostRentDetail">
            <PostRentDetail />
          </Route>
          <Route path="/PostAccessDetails">
            <PostAccessDetails />
          </Route>
          <Route path="/Setting">
            <Setting />
          </Route>
          <Route path="/OpenAccessories">
            <OpenAccessories />
            <Foot />
          </Route>
          <Route path="/AboutusRentPage">
            <AboutusRentPage />
          </Route>
          <Route path="/PostAdDetail">
            <PostAdDetail />
            <PostRentDetail />
            <PostAccessDetails />
          </Route>
          {/* <Route path="/rentPage">
            <rentPage />
          </Route> */}
          <Route path="/Rentadd">
            <Rentadd />
          </Route>
          <Route path="/AccessShowmore">
            <AccessShowmore />
          </Route>
          <Route path="/OpenRentAd">
            <OpenRentAd />
            <Foot />
          </Route>
          <Route path="/Nodefetc">
            <Nodefetc />
          </Route>

          <Route path="/Openad/:id">
            <Openad />
            {/* <Nodefetc /> */}
            <Foot />
          </Route>
          <Route path="/Rentpostad">
            <Rentpostad />
          </Route>
          <Route path="/Accessoriespage">
            <Accessoriespage />
          </Route>
          <Route path="/Banner">
            <Banner />
          </Route>
          <Route path="/Accessories">
            <Accessories />
          </Route>
          <Route path="/Parts">
            <Parts />
            <Accessories />
            <Foot />
          </Route>
          <Route path="/Foot">
            <Foot />
          </Route>
          <Route path="/LatestAdd">
            <LatestAdd />
          </Route>
          <Route path="/Ad">
            <Ad />
          </Route>
          <Route path="/Rentsearchbar">
            <Rentsearchbar />
          </Route>
          <Route path="/Slider">
            <Slider />
          </Route>
          <Route path="/Navbar">
            <Navbar />
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/Searchbar">
              <Searchbar />
            </Route>
          </Route>
          <Route path="/Home">
            <Searchbar />
            <Banner />
            <Home />
            <Services />
            <Ad />
            <Accessories />
            <Rentadd />
            <AboutusRentPage />
            <Adtyre/>
            <Foot />
            {/* <li>
              <Link to="/Navbar"></Link>
            </li> */}
          </Route>
          <Route path="/Signup">
            <Signup />
            <Banner />
            <Foot />
          </Route>
          <Route path="/Contactus">
            <Contactus />
            <Foot />
          </Route>
          <Route path="/Postadd">
            <Postadd />
            <PostAdDetail />
            <Foot />
          </Route>
          <Route path="/Blog">
            <Blog />
            <Foot />
          </Route>
          <Route path="/Rent">
            <Rent />
            <Rentadd />
            <Rentsearchbar />
            <AboutusRentPage />
            <Foot />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
