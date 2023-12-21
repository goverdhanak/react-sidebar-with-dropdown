import React, { useState, useEffect } from "react";
import { peneLink } from "../../tabluea/TablueLink";
import Loader from "../../components/common/Loder";

const WithinCityExpansion = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [loading])
  return (
    <div className="HomePageTablue">
      {loading ? <Loader /> : <tableau-viz id="tableauViz" height="100vh" width="90vw"
        src={peneLink}
      />}
    </div>
  )
}

export default WithinCityExpansion;
