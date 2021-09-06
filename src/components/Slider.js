// import React from 'react'

// const Slider = () => {
//     return (
//       <div className="slider_back">
//         <div class="w3-container">
//           <h2>Slideshow Indicators</h2>
//           <p>
//             Using images to indicate how many slides there are in the slideshow,
//             and highlight the image the user is currently viewing.
//           </p>
//         </div>

//         <div class="w3-content">
//           <img class="mySlides" src="/images/latestadd.jpg" />
//           <img class="mySlides" src="/images/latestadd.jpg" />
//           <img class="mySlides" src="/images/latestadd.jpg" />

//           <div class="w3-row-padding w3-section">
//             <div class="w3-col s4">
//               <img
//                 class="demo w3-opacity w3-hover-opacity-off"
//                 src="/images/latestadd.jpg"
//                 onclick="currentDiv(1)"
//               />
//             </div>
//             <div class="w3-col s4">
//               <img
//                 class="demo w3-opacity w3-hover-opacity-off"
//                 src="/images/latestadd.jpg"
//                 onclick="currentDiv(2)"
//               />
//             </div>
//             <div class="w3-col s4">
//               <img
//                 class="demo w3-opacity w3-hover-opacity-off"
//                 src="/images/latestadd.jpg"
//                 onclick="currentDiv(3)"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }
// export default Slider;


// function currentDiv(n) {
//   showDivs((Slider = n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {Slider = 1;}
//   if (n < 1) {Slider = x.length;}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
//   }
//   x[Slider - 1].style.display = "block";
//   dots[Slider - 1].className += " w3-opacity-off";
// }


import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "/images/latestadd.jpg",
  "/images/latestadd.jpg",
  "/images/latestadd.jpg",
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div
            className="img_slider_control"
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          >
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            className="img_slider_control"
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            className="img_slider_control"
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          >
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slider;

