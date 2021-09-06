import React from 'react'

 const Rent = () => {
   setTimeout(() => {
     debugger;
     var elem = document.getElementById("loginButton");
     if (elem) {
       elem.textContent = "Log Out";
       elem.style.marginRight = "4em";
     }

     var elem2 = document.getElementById("signupButton");
     if (elem2) {
       elem2.parentNode.removeChild(elem2);
     }

     if (localStorage.getItem("token")) {
     } else {
       document.getElementById("loginButton").click();
     }
   }, 0);
    return (
      <div className="rent_main">
        <div className="rent_back">
          <a href="/Rentpostad">
            <button className="post_free_rend_button buttonRent">
              Rent a Bike +
            </button>
          </a>
        </div>
        <div className="Rent_second_page">
          <div className="secondpage_box">
            <div className="secondpage_head_rent">WHAT OUR CLIENTS SAYS</div>
            <div className="small_boxes_rent shan">
              <div className="rent_second_head ">
                Muhammad
                <p className="para_rent_second_page">
                  Great customer service provided, the car was delivered on time
                  and exceeded our expectations. The car was nearly new and very
                  clean. The whole process was very easy and seamless. I would
                  highly recommend! Thank you.
                </p>
              </div>
            </div>
            <div className="small_boxes_rent shan">
              <div className="rent_second_head ">
                Shaheen
                <p className="para_rent_second_page">
                  Great customer service provided, the car was delivered on time
                  and exceeded our expectations. The car was nearly new and very
                  clean. The whole process was very easy and seamless. I would
                  highly recommend! Thank you.
                </p>
              </div>
            </div>
            <div className="small_boxes_rent shan">
              <div className="rent_second_head">
                Malik
                <p className="para_rent_second_page">
                  Great customer service provided, the car was delivered on time
                  and exceeded our expectations. The car was nearly new and very
                  clean. The whole process was very easy and seamless. I would
                  highly recommend! Thank you.
                </p>
              </div>
            </div>
            <div className="small_boxes_rent shan">
              <div className="rent_second_head">
                Malik
                <p className="para_rent_second_page">
                  Great customer service provided, the car was delivered on time
                  and exceeded our expectations. The car was nearly new and very
                  clean. The whole process was very easy and seamless. I would
                  highly recommend! Thank you.
                </p>
              </div>
            </div>
            <div className="small_boxes_rent shan ">
              <div className="rent_second_head">
                Awan
                <p className="para_rent_second_page">
                  Great customer service provided, the car was delivered on time
                  and exceeded our expectations. The car was nearly new and very
                  clean. The whole process was very easy and seamless. I would
                  highly recommend! Thank you.
                </p>
              </div>
            </div>
            <div className="small_boxes_rent shan">
              <div className="rent_second_head">
                Owais
                <p className="para_rent_second_page">
                  Great customer service provided, the car was delivered on time
                  and exceeded our expectations. The car was nearly new and very
                  clean. The whole process was very easy and seamless. I would
                  highly recommend! Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="small_lastrent_box"></div>
      </div>
    );
}

export default Rent;
