import React, { useState, useEffect } from "react";
import Loader from "../../components/common/Loder";
import { newcityLink } from "../../tabluea/TablueLink";


const NewCityExpansion = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [loading])
  // const functioncall = chnl('wot')
  // console.log("functioncall==>",functioncall)
  return (
    <div className="HomePageTablue">
      {loading ? <Loader /> : <tableau-viz id="tableauViz" height="100vh" width="90vw"
        src={newcityLink}
      />}
    </div>
  )
}

export default NewCityExpansion;
