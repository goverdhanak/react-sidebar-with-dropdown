
import React, { useEffect, useState } from "react";
import { darkcatchlink } from "../../tabluea/TablueLink";
import Loader from "../../components/common/Loder";


const DarkCatchmentExansion = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [loading])

  return (
    <div className="HomePageTablue">
      {loading ? <Loader /> : <tableau-viz id="tableauViz"  height="100vh" width="90vw"
        src={darkcatchlink}
      />}
    </div>
  );
};

export default DarkCatchmentExansion;