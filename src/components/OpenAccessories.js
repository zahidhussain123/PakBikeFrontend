import React from "react";
import axios from "axios";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Nodefetc from "./Nodefetc";

// const slideImages = [
//   "/images/latestadd.jpg",
//   "/images/latestadd.jpg",
//   "/images/latestadd.jpg",
// ];

class OpenAccessories extends React.Component {
  constructor() {
    super();

    // console.log(this.href.substring(this.href.lastIndexOf("/") + 1));
    // console.log("this.state",this.state)
    // this.state.users.map((item, index) => {
    //   console.log("item", item);
    // })
    // this.setState({ item: data });
    // this.state = {
    //   data: [{}],
    // };
  }

  async componentDidMount() {
    axios({
      url: "http://localhost:3000/Accessories/getAccess",
      method: "GET",
      // params: {
      //   search: "parameter",
      // },
    })
      .then((response) => {
        // console.log("Data", response.data.results);
        this.setState({ form: response.data.results });

        // alert(response.data.message);
      })
      .catch((err) => {
        alert("OOOOPPSS error");
      });
  }

  render() {
    var data = JSON.parse(localStorage.getItem("selectedItem"));
 data.image = "http://localhost:3000/uploads/1629692031607helmete.jpg";
 data["image2"] = "http://localhost:3000/uploads/1629692031607helmete.jpg";
 data["image3"] = "http://localhost:3000/uploads/1629692031607helmete.jpg";
console.log("Data Openad", data);
    return (
      <div>
        <div className="back_openad_back">
          <div className="back_left_add">
            <div className="title_openad">{data.title}</div>
<div>__________________________________________________________________</div>
            <div className="loc_top_openad">{data.Location}</div>
            <div className="width_slider_box">
              <div className="slide-container">
                <Slide>
                  <div className="each-slide">
                    <div
                      className="img_slider_control"
                      src={{
                        backgroundImage: `url(${data.image})`,
                      }}
                    ></div>
                  </div>
                  <div className="each-slide">
                    <div
                      className="img_slider_control"
                      style={{
                        backgroundImage: `url(${data.image})`,
                      }}
                    ></div>
                  </div>
                  <div className="each-slide">
                    <div
                      className="img_slider_control"
                      style={{
                        backgroundImage: `url(${data.image})`,
                      }}
                    ></div>
                  </div>
                </Slide>
              </div>
            </div>
            <div className="box_des_bottom_slider">
              <div className="des_openad">
                <div className="all_heading_openad">Description :</div>
                {data.description}
              </div>
              <div className="brand_openad">
                <span className="all_heading_openad">Brand : </span>
                {data.brand}
              </div>
              <div className="condition_openad">
                <span className="all_heading_openad">Condition :</span>
                {data.condition}
              </div>
              <div className="model_openad">
                <span className="all_heading_openad">Category : </span>
                {data.categories}
              </div>
              <div className="millage_openad">
                <span className="all_heading_openad">Condition : </span>
                {data.millage}
              </div>
              <div className="loc_openad">
                <span className="all_heading_openad">Location : </span>
                {data.location}
              </div>
              <div className="date_openad">
                <span className="all_heading_openad">Date : </span>
                {data.Date}
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="back_right_add">
            <div className="box_price_openadd">
              <div className="price_openad ">
                <span className="Rs_heading_openad">Rs : </span>
                {data.price}
              </div>
            </div>
            {/* contact right box */}

            <button className="butt_phone_button button4">
              <div className="button_phone_openad">
                <span className="phone_icon_openad" color="white">
                  &#128222;
                </span>
                {data.phone}
              </div>
              <div className="contact_headind_openad">Contact Number</div>
            </button>
            {/* post add img or box */}
            <div className="img_seller_postad">
              <img
                className="img_seller_postad"
                src="/images/sellingAdImage.jpeg"
                alt="logo"
              />
            </div>
            
          </div>
          {/* <div className="Similarad_openad">
            <h1 className="similar_ad_text"> Similar Ads</h1>
          </div> */}
        </div>
      </div>
    );
  }
}

// export async function getStaticProps({ params: {id} }) {
//    debugger;
//   const res = await fetch(`http://localhost:3000/Ad/:id/${id}`);
//   const data = await res.json();
//   console.log(res.data);
//   return {
//     props: { item: data.results },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { _id: "6085a5446ff9cb1774d7c076" } }],
//     fallback: true,
//   };
// }

export default OpenAccessories;
