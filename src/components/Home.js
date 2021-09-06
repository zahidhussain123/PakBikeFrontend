import React from 'react'

const Home = () => {
    debugger

    setTimeout(() => {
        var elem = document.getElementById("loginButton");
        elem.textContent = "Log Out";
        elem.style.marginRight = "4em";

        var elem2 = document.getElementById("signupButton");
        if(elem2){
        elem2.parentNode.removeChild(elem2);
        }
    }, 0);
    return (
        <div className="open_home">
      
            
        </div>
    )
}
export default Home;