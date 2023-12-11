
import React from "react";
import { tablueLink } from "../../tabluea/TablueLink";


const DarkCatchmentExansion = () => {

  return (
    <div className="HomePageTablue">
      <tableau-viz id="tableauViz"
        src={tablueLink}
      />
    </div>
  );
};

export default DarkCatchmentExansion;