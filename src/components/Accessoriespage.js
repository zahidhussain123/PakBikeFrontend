import React from 'react'
import axios from "axios";

class Accessoriespage extends React.Component {
  constructor() {
    super();
    this.state = {
      AccessoriesList: [],
       visible: 12,
    };
      this.loadmore = this.loadmore.bind(this);
  }
  Clickme = (access) => {
    debugger;
    localStorage.removeItem("selectedItem");
    localStorage.setItem("selectedItem", JSON.stringify(access));
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

  // get Method
  componentDidMount = () => {
    axios({
      url: "http://localhost:3000/Accessories/getAccess",
      method: "GET",
    })
      .then((response) => {
        console.log("Data", response.data.results);

        // this.setState({ AccessoriesList: response.data.results });
  var byDate = response.data.results.slice(0);
  byDate.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log("Data", byDate);
  this.setState({ AccessoriesList: byDate });
        // alert(response.data.message);
      })
      .catch((err) => {
        alert("OOOOPPSS error");
      });
  };

  render() {
    this.state.AccessoriesList.forEach((element, index) => {
      this.state.AccessoriesList[index].image =
        "http://localhost:3000/" + this.state.AccessoriesList[index].image;
    });
    return (
      <div>
        <div className="small_uper_box_Access_page"></div>
        <div className="access_page_back">
          <div className="access_page_short_Box">
            {this.state.AccessoriesList.slice(0, this.state.visible).map(
              (access, index) => (
                <div className="access_page_short2_Box">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          {/* <img
                          src="/images/helmet.jpg"
                          className="image_Access_page"
                        /> */}
                          <div className="">
                            <img
                              className="image_Access_page"
                              src={access.image}
                            />
                          </div>
                          {/* <h5 className="access_page_line">
                          ______________________
                        </h5> */}
                          <div className="name_access_page">
                            <span className="All_Access_heading"></span>
                            {access.title}
                          </div>
                          <div className="Price_access_page">
                            <span className="All_Access_heading">Rs : </span>
                            {access.price}
                          </div>
                          <div>
                            <a href="/OpenAccessories">
                              <button
                                onClick={this.Clickme.bind(this, access)}
                                className="view_detail_butt button5"
                              >
                                View Details
                              </button>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>
         
          <div className="loadmore_Accesories_ad_div">
            {this.state.visible < this.state.AccessoriesList.length && (
              <button
                className="loadmore_Accesories_ad button5"
                type="button"
                onClick={this.loadmore}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Accessoriespage;