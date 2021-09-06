/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import Link from 'next/link';




class Nodefetc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  Clickme = (item) => {
    debugger;
    localStorage.removeItem("selectedItem");
    localStorage.setItem("selectedItem", JSON.stringify(item));
    //  let history = useHistory();
    //  history.push("/Openad/");
    //  console.log(item);
    //  this.setState({ item: item });
  };
  componentDidMount = () => {
    axios({
      url: "http://localhost:3000/Ad/getAd",
      method: "GET",
    })
      .then((response) => {
        console.log("Data", response.data.results);
        this.setState({ users: response.data.results });

        // alert(response.data.message);
      })
      .catch((err) => {
        alert("OOOOPPSS error");
      });
  };

  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <div className="ddd_back">
          {this.state.users.map((item, index) => (
            <div className="small_box_Addd ">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="image_Addd"
                      />

                      <div key={index.id} className="heading_addd">
                        {item.title}
                      </div>
                      <h5 className="line_addd">
                        _______________________________
                      </h5>
                      <div key={index.id} className="">
                        Price : {item._id}
                      </div>
                      <div className="price_addd_box ">
                        <div key={index.id} className="price_addd">
                          Price : {item.price}
                        </div>
                      </div>
                      <div key={index.id} key={index.id} className="Brand_addd">
                        <span className="All_addd_heading">Brand : </span>
                        {item.brand}
                      </div>
                      <div key={index} className="modal_addd">
                        <span className="All_addd_heading">Modal : </span>
                        {item.model}
                      </div>
                      <div key={index} className="kilometer_addd">
                        <span className="All_addd_heading">Kilometer : </span>
                        {item.millage}
                      </div>
                      <div key={index} className="condition_addd">
                        <span className="All_addd_heading">Condition : </span>
                        {item.condition}
                      </div>

                      {/* <div key={index} className="type_addd">
                        <span className="All_addd_heading">Type : </span>
                        {item.description}
                      </div> */}
                      <div key={index} className="location_addd">
                        <span className="All_addd_heading">Location : </span>{" "}
                        {item.location}
                      </div>
                      <div key={index} className="time_addd">
                        <span className="All_addd_heading">Time : </span>{" "}
                        {item.date}
                      </div>
                      {/* view add post */}

                      <div className="">
                        <a href={`/Openad/` + item._id}>
                          <button
                            onClick={this.Clickme.bind(this, item)}
                            className="latestadd_view"
                          >
                            View Ad
                          </button>
                        </a>

                        {/* href={`/Openad/` + item.id} 
                        href={`/Openad/id`} as={`/Openad/${item._id}`}
                            onClick={this.Clickme.bind(this, item)}*/}
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

export default Nodefetc;

//  <p>
//    User Name : {user.title}, User Name : {user.brand}
//  </p>;
