import React,{useEffect, useState} from 'react';
import background from '../images/bglink.png'
import gallery from '../images/gallery.png'
import Music from '../images/music.png'
import key from '../images/key.png'
import axios from 'axios';


function Upload() {

  const [state, setState] = useState([]);

  // useEffect(()=>{
  //  axios.get("http://localhost:3003/local").then(res=>{
  //    setState(res.data)
  //  })
  // },[])

  const getSearchKey = (keyword) => {
     axios
    .get("http://localhost:3003/local?q=" + keyword)
    .then(res=>{
      setState(res.data)
    })
  }

  return <div>
     <input type="text" 
     style={{marginTop:"50px", textAlign:"center",padding:"10px"}}
      placeholder='Search' 
      onChange={(e)=>getSearchKey(e.target.value)}
      />
      <div style={{marginTop:"50px"}} > 
        <img src={background} />
        <img src={gallery} />
        <img src={Music} />
        <img src={key} />
      </div>
      <div style={{marginInline:"600px" ,marginTop:"30px"}}>
      <img src={background} style={{display:"flex" }} />
      {
        state.map(ele=>(
          <p>{ele.s}</p>
        ))
      }
        <img src={gallery} style={{display:"flex" }}  />
        {
        state.map(ele=>(
          <p>{ele.din}</p>
        ))
      }
        <img src={Music} style={{display:"flex" }} />
        {/* <p>Top secret archive</p> */}
        <img src={key} style={{display:"flex" }} />
        {/* <p>On the top of the world</p> */}
      </div>
  </div>;
}

export default Upload;
