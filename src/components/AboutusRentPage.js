import React from 'react'

const AboutusRentPage = () => {
    return (
      <div className="show_more_rent_back">
        <div className="addmore_rentadd_div_rent">
          <a href="/Rentadd">
            <button className="addmore_rentadd rent_show_more_hover">Show More</button>
          </a>
        </div>
        {/* this about section css is on rent.css folder */}
        {/* <div className="thirdpage_back_rent">
          <div className="Rent_thirdpage">
            <div className="thirdpage_about_head">
              About Us
              <p className="thirdpage_about_des">
                Pak-Bike is separate platform for the bike lovers, buyers and
                sellers. As the current world is becoming fully digitalized, why
                not make buying and selling of bikes digital as well. Thus this
                web-application will be very helpful for those who have a taste
                in bikes and are interested in their purchase/selling, whether
                it be bikes, their tools/parts etc.
              </p>
            </div>
          </div>
          <div className="aboutrent_img">
            <img className="aboutRent_pic" src="/images/AboutRent.jpg" />
          </div>
        </div> */}
      </div>
    );
}

export default AboutusRentPage
// this page of css is on rentadd.css folder