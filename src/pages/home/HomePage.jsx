import React from 'react';
import bgImg from '../../assets/images/bgImge.png'


const HomePage = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center" , height:"95vh", width:"70vw", marginLeft:"4%"}}>
      <img src={bgImg} class="img-fluid" alt="..." height="60%" width="60%" />
    </div>
  );
};

export default HomePage;