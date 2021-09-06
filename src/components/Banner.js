import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
 
} from "react-icons/fa";

const banner = () => {
      
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul className="header__ul">
              <a href="https://www.facebook.com/profile.php?id=100013178644600">
                <li className="but">
                  <FaFacebookF />
                </li>
              </a>
              <a href="https://twitter.com/shaheenmalik112">
                <li className="but">
                  <FaTwitter />
                </li>
              </a>
              <a href="https://www.linkedin.com/in/shaheen-malik-7140b4155/">
                <li className="but">
                  <FaLinkedin />
                </li>
              </a>
              <a href="https://www.instagram.com/shanimalick0_07/">
                <li className="but">
                  <FaInstagram />
                </li>
              </a>
            </ul>
          </div>

          {/* post an Add button on header */}
          {/* <div className="">
            <a href="/Postadd">
              <button class="post_ad button2">Post Free Ad +</button>
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default banner;

