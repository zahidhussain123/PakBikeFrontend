/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";

class PostAccessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentList: [],
    };
  }

  Clickme = (item) => {
    debugger;
    localStorage.removeItem("selectedItem");
    localStorage.setItem("selectedItem", JSON.stringify(item));
  };

  componentDidMount = () => {
    axios({
      url: "http://localhost:3000/Accessories/getAccess",
      method: "GET",
    })
      .then((response) => {
        console.log("Data", response.data.results);

        this.setState({ rentList: response.data.results });
      })
      .catch((err) => {
        alert("OOOOPPSS error");
      });
  };
  // delete method
  delete(_id) {
    fetch("http://localhost:3000/Accessories/AccessDelete/" + _id, {
      method: "DELETE",
      // headers: { Authorization: `Bearer ${token}` },
    }).then((results) => {
      results.json().then((resp) => {
        alert("deleteeeess your record");
      });
    });
  }
  // update method
  update(_id) {
    fetch("http://localhost:3000/Accessories/AccessPut/" + _id, {
      method: "PUT",
      // headers: { Authorization: `Bearer ${token}` },
    }).then((results) => {
      results.json().then((resp) => {
        alert("Update your record");
      });
    });
  }

  render() {
    debugger;
    this.state.rentList.forEach((element, index) => {
      this.state.rentList[index].image =
        "http://localhost:3000/" + this.state.rentList[index].image;
    });

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
      <div>
        <div className="heading_records_postad_details">
          <div className="heading_records_setting">
            All Bikes Accessories Details
          </div>
        </div>
        <div className="All_records_postad_details">
          <div className="title_ad_detail_post">Title</div>
          <div className="model_ad_detail_post">Model</div>
          <div className="brand_ad_detail_post">Brand</div>
          <div className="price_ad_detail_post">Price Per Hour</div>
          <div className="postad_detailpage_div">
            <a href="/PostAccessories">
              <button className="postad_detailpage button3">Ad New +</button>
            </a>
          </div>
        </div>
        <div className="back_postad_detail">
          {this.state.rentList.map((item, index) => (
            <div className="user_add_show_box ">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        key={index.id}
                        src={item.image}
                        className="postad_detail_img"
                      />

                      <div key={index.id} className="title_post_ad_detail">
                        {item.title}
                      </div>
                      <div key={index.id} className="model_postAd_detail">
                        {item.model}
                      </div>
                      <div key={index.id} className="brand_postAd_detail">
                        {item.brand}
                      </div>

                      <div key={index.id} className="price_postAd_detail ">
                        {item.price}
                      </div>
                      {/* edit and delete button */}
                      <div className="butt_div_delete ">
                        <button
                          className="butt_delete "
                          onClick={() => this.delete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="butt_div_update ">
                        <a href={`/PostAccessories/` + item._id}>
                          <button
                            className="butt__update "
                            onClick={() => this.update(item._id)}
                          >
                            Update
                          </button>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostAccessDetails;
