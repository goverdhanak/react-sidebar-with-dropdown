import React from "react";
import { tablueLink } from "../../tabluea/TablueLink";

const WithinCityExpansion = () => {



  return (
    <div className="HomePageTablue">
      <tableau-viz id="tableauViz"
        src={tablueLink}
      />
    </div>
  )
}

export default WithinCityExpansion;
