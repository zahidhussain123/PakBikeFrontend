/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";


class Rentadd extends React.Component {
  constructor() {
    super();
    this.state = {
      rentList: [],
      visible: 5,
    };
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
      url: "http://localhost:3000/Rent/getRent",
      method: "GET",
    })
      .then((response) => {
        console.log("Data", response.data.results);
        // this.setState({ rentList: response.data.results });
         var byDate = response.data.results.slice(0);
         byDate.sort(function (a, b) {
           return b.price - a.price;
         });
          console.log("Data", byDate);
          this.setState({ rentList: byDate });
        // alert(response.data.message);
      })
      .catch((err) => {
        alert("OOOOPPSS error");
      });
  };

  deletes(_id) {
    fetch("http://localhost:3000/Rent/rentDel/" + _id, {
      method: "DELETE",
      // headers: { Authorization: `Bearer ${token}` },
    }).then((results) => {
      results.json().then((resp) => {
        alert("deleteeeess your record");
      });
    });
  }

  render() {
    debugger;
    this.state.rentList.forEach((element, index) => {
      this.state.rentList[index].image =
        "http://localhost:3000/" + this.state.rentList[index].image;
    });
    return (
      <div className="rentpage_back">
        <div className="hngg">
          <div className="latest_Top">Latest </div>
          <h1 className="latest_Top2">Rent</h1>
          <div className="latest_Top3">Bikes</div>
          <div className="Lines_latestadd">______________</div>
          <div className="Lines_latestadd">______</div>
        </div>
        {this.state.rentList.slice(0, this.state.visible).map((item) => (
          <div className="small_box_Rent">
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src={item.image} className="img_rent_ad" />
                    <div className="heading_rentt">{item.title}</div>
                    <div className="Location_rentor">
                      <span className="rent_addd_all">Location : </span>
                      {item.location}
                    </div>
                    <div className="brand_state_rent">
                      <span className="rent_addd_all">Brand : </span>
                      {item.brand}
                    </div>
                    {/* <div className="type_rent_ad">
                      <span className="rent_addd_all">Type : </span>
                      {item.Type}
                    </div> */}
                    <div className="model_rent_ad">
                      <span className="rent_addd_all">Model : </span>
                      {item.model}
                    </div>
                    {/* <div className=" ">
                      <button
                        className=" "
                        onClick={() => this.deletes(item._id)}
                      >
                        Delete
                      </button>
                    </div> */}
                    <div className="box_small_two">
                      <div className="price_rent_ad">
                        <div className="rent_addd_price">Rent Per Hour : </div>
                        {item.price}
                      </div>
                      <a href={`/OpenRentAd/` + item._id}>
                        <button
                          onClick={this.Clickme.bind(this, item)}
                          className="contact_buttn_ren rent_but_5"
                        >
                          View Ad
                        </button>
                      </a>
                    </div>
                    {/* <div className="heading_rentt">Honda 125 New Model</div>

                      <div className="price_renter">Price :{item.Price}</div>
                      <div className="Location_rentor">
                        <span className="All_rent_addd_heading">Location : </span>
                        {item.Location}
                      </div> */}
                    <div className="">
                      <span> </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <div>
          {this.state.visible < this.state.rentList.length && (
            <button
              className="load_more_button_rent button5"
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

export default Rentadd;
