import React, { useState, useEffect } from "react";
import { tablueLink } from "../../tabluea/TablueLink";
import Loader from "../../components/common/Loder";


const NewCityExpansion = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [loading])
  return (
    <div className="HomePageTablue">
      {loading ? <Loader /> : <tableau-viz id="tableauViz"
        src={tablueLink}
      />}
    </div>
  )
}

export default NewCityExpansion;
