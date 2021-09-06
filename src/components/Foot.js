import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

 const Foot = () => {
    return (
      <div>
        <div className="Footer_back">
          <div className=" social_link_footer">
            <div className="Followus_footer">Follow Us</div>
            <div className="footer_link">
              <div className="footer_link_social">
                <a href="https://www.facebook.com/profile.php?id=100008183141262">
                  <li className="but">
                    <FaFacebookF />
                  </li>
                </a>
                <a href="https://twitter.com">
                  <li className="but">
                    <FaTwitter />
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/zahid-hussain-850a80175">
                  <li className="but">
                    <FaLinkedin />
                  </li>
                </a>
                <a href="https://www.instagram.com/p/CTNEJUwipr1/?utm_medium=copy_link">
                  <li className="but">
                    <FaInstagram />
                  </li>
                </a>
              </div>
            </div>
          </div>
          <div className="pakbike_foot">
            <div className="Pakbike_title_foot">Quick Search</div>
            <a className="pakbike_list_foot blink_word" href="/Home">
              Main Page
            </a>
            <a className="pakbike_list_foot blink_word" href="/Ad">
              New Bikes
            </a>
            <a className="pakbike_list_foot blink_word" href="/Ad">
              Used Bikes
            </a>
            <a className="pakbike_list_foot blink_word" href="/Rent">
              Rent
            </a>
            <a className="pakbike_list_foot blink_word" href="Parts">
              Parts
            </a>
            <a className="pakbike_list_foot blink_word" href="/Blog">
              Blogs
            </a>
            <a className="pakbike_list_foot blink_word" href="/Contactus">
              Contact Us
            </a>
          </div>
          <div className="forcontact_foot">For Contact</div>
          <div className="contact_foot">Call Us : 03445655828</div>
          <div className="email_foot">Email : zahid4307@gmail.com</div>
          <div className="email_foot">Email : shaheenmalik879@gmail.com</div>
          <div className="footer_logo">
            PakBike.com
            {/* <div className="Logo_foot_description">
              Pak-Bike is also a source of income for various sellers, salesmen
              can open their own Account on Pak-Bike and sell their products of
              durable quality at affordable prices.
            </div> */}
          </div>
          <div className="Foot_small_box_End">
            <div className="copyright_foot">
              Copyright © 2021 - PakBike (Pvt) Ltd. - All Rights Reserved.
            </div>
            <div className="Terms_foot">
              <a className="term_footer" href="">
                Terms of Service | Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Foot;