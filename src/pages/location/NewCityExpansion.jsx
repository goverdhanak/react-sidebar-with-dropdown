import React from "react";
import micIcon from "../../assets/images/mic-icon.png";


const NewCityExpansion = () => {
  return (
    <div className="HomePageTablue">
      <div>
        <button className="LoginBtn" >
          <img src={micIcon} width="23" alt="micIcon" />
          <span className="mx-3 mt-3">Sign in With Microsoft</span>
        </button>
      </div>
    </div>
  )
}

export default NewCityExpansion;
