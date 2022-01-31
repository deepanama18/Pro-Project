import React from 'react';
import background from '../images/bglink.png'
import gallery from '../images/gallery.png'
import Music from '../images/music.png'
import key from '../images/key.png'



function LocalStorage() {
  return <div>
     <input type="text" 
     style={{marginTop:"50px", textAlign:"center",padding:"10px"}}
      placeholder='Search' 
      />
      <div style={{marginTop:"50px"}}> 
        <img src={background} />
        <img src={gallery} />
        <img src={Music} />
        <img src={key} />
      </div>
      <div style={{marginInline:"600px" ,marginTop:"30px"}}>
      <img src={background} style={{display:"flex" }} />
      <p >Franky Wah -Aftertime</p>
        <img src={gallery} style={{display:"flex" }}  />
       <p>Annie's new car</p>
        <img src={Music} style={{display:"flex" }} />
        {/* <p>Top secret archive</p> */}
        <img src={key} style={{display:"flex" }} />
        {/* <p>On the top of the world</p> */}
      </div>
  </div>;
}

export default LocalStorage;
