/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import Link from 'next/link';
// import ReactDom from "react-dom";
// import TimeAgo from '../../src/index'

// const appElement = document.getElementById('app')

// appElement &&
//   ReactDom.render(
//     <div>
//       You opened this page <TimeAgo date={Date.now()} />
//     </div>,
//     appElement,
//   )


class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      visible: 8,
    }
    this.loadmore = this.loadmore.bind(this);
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

  loadmore = () => {
    this.setState((old) => {
      return { visible: old.visible + 8 };
    });
  };

  componentDidMount = () => {
    axios({
      url: "http://localhost:3000/Ad/getAd",
      method: "GET",
    })
      .then((response) => {
        console.log("Data", response.data.results);
        var byDate = response.data.results.slice(0);
        byDate.sort(function (a, b) {
          return b.price - a.price;
        });
        
        console.log("Data", byDate);
        this.setState({ users: byDate });

        // alert(response.data.message);
      })
      .catch((err) => {
        alert("OOOOPPSS error");
      });
  };
  
  // delete method
  delete(_id) {
    fetch("http://localhost:3000/Ad/adDel/" + _id, {
      method: "DELETE",
      // headers: { Authorization: `Bearer ${token}` },
    }).then((results) => {
      results.json().then((resp) => {
        alert("deleteeeess your record");
      });
    });
  }
  //
  getId(_id) {
    fetch("http://localhost:3000/Ad/" + _id, {
      method: "GET",
    }).then((results) => {
      results.json().then((resp) => {
        alert("get id your record");
      });
    });
  }

  // LOad more function

  // Put Method
  //    componentDidUpdate = () =>{
  // axios({
  //   url: "http://localhost:3000/Ad/adPut/:id" ,
  //   method: "PUT",
  // })
  //  .then((response) => {
  //         console.log("Data", response.data.results);

  //         this.setState({ users: response.data.results });

  //         // alert(response.data.message);
  //       })
  //       .catch((err) => {
  //         alert("OOOOPPSS error");
  //       });
  //    }


  
  render() {
    debugger;
    this.state.users.forEach((element, index) => {
      this.state.users[index].image =
        "http://localhost:3000/" + this.state.users[index].image;
    });

setTimeout(() => {
     debugger
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
        <div className="hngg">
          <div className="latest_Top">Latest </div>
          <h1 className="latest_Top2">Trending</h1>
          <div className="latest_Top3">Ads</div>
          <div className="Lines_latestadd">______________</div>
          <div className="Lines_latestadd">______</div>
        </div>
        <div className="ddd_back">
          {this.state.users.slice(0, this.state.visible).map((item, index) => (
            <div className="small_box_Addd ">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        key={index.id}
                        src={item.image}
                        className="image_Addd"
                      />

                      <div key={index.id} className="heading_addd">
                        {item.title}
                      </div>
                      <h5 className="line_addd">
                      ____________________________
                      </h5>
                      {/* <div key={index.id} className="">
                        Price : {item._id}
                      </div> */}
                      <div className="price_addd_box ">
                        <div key={index.id} className="price_addd">
                          Price : {item.price}
                        </div>
                      </div>
                      <div key={index.id} key={index.id} className="Brand_addd">
                        <span className="All_addd_heading">Brand : </span>
                        {item.brand}
                      </div>
                      <div key={index.id} className="modal_addd">
                        <span className="All_addd_heading">Modal : </span>
                        {item.model}
                      </div>

                      <div key={index.id} className="kilometer_addd">
                        <span className="All_addd_heading">Kilometer : </span>
                        {item.millage}
                      </div>
                      <div key={index.id} className="condition_addd">
                        <span className="All_addd_heading">Condition : </span>
                        {item.condition}
                      </div>

                      {/* <div key={index} className="type_addd">
                        <span className="All_addd_heading">Type : </span>
                        {item.description}
                      </div> */}
                      <div key={index.id} className="location_addd">
                        <span className="All_addd_heading">Location : </span>{" "}
                        {item.location}
                      </div>
                      <div key={index.id} className="time_addd">
                        <span className="All_addd_heading">Time : </span>{" "}
                        {item.Date}
                      </div>

                      <div className="">
                        <a href={`/Openad/` + item._id}>
                          <button
                            onClick={this.Clickme.bind(this, item)}
                            className="latestadd_view button5"
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
        <div className="load_more_button_div">
          {this.state.visible < this.state.users.length && (
            <button
              className="load_more_button button5"
              type="button"
              onClick={this.loadmore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Ad;

//  <p>
//    User Name : {user.title}, User Name : {user.brand}
//  </p>;
