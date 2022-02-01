import React, { useEffect, useState } from 'react';
import background from '../images/bglink.png'
import gallery from '../images/gallery.png'
import Music from '../images/music.png'
import key from '../images/key.png'
import axios from 'axios';
import BottomNavigation from '@mui/material/BottomNavigation';
import local from '../images/icons1.png';
import local1 from '../images/icons2.png';
import local2 from '../images/icons3.png';
import local3 from '../images/icons4.png';
import local4 from '../images/icons5.png';
import { Link } from "react-router-dom";



function LocalStorage() {

  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/local").then(res => {
      setState(res.data)
    })
  }, [])

  const getSearchKey = (keyword) => {
    axios
      .get("http://localhost:3003/local?q=" + keyword)
      .then(res => {
        setState(res.data)
      })
  }

  return <div>
    <h1 style={{ margin: "20px", fontFamily: "sans-serif", fontSize: "35px", color: "blue" }}>
      Local Storage
    </h1>
    <input type="text"
      style={{ marginTop: "10px", textAlign: "center", padding: "10px" }}
      placeholder='Search'
      onChange={(e) => getSearchKey(e.target.value)}
    />
    <div style={{ marginTop: "5px", display: "flex",justifyContent:"center",marginRight:"40px"}} >
      <span style={{ flexDirection: "column", width: "50px", padding: "20px", margin: "20px" }}>
        <img src={background} />
        <b>Video</b>
      </span>
      <span style={{ width: "50px", margin: "20px", padding: "20px" }}>
        <img src={gallery} />
        <b>Image</b>
      </span>
      <span style={{ width: "50px", margin: "20px", padding: "20px" }}>
        <img src={Music} />
        <b>  Music</b>
      </span>
      <span style={{ width: "50px", margin: "20px", padding: "20px" }}>
        <img src={key} />
        <b>Archive</b>
      </span>
    </div>
    <div>
      <div className='row' >
        {
          state.map(ele => (
            <>
              <div className="col-md-12" 
              style={{justifyContent:"center",display:"flex",flexDirection:"column"}} >
                <div className="card bg-secondary my-2" >
                  <div className="card-body" >
                    <div style={{ display: "flex",justifyContent:"center" }}>
                      <img src={ele.images} style={{display:"inline"}} />
                      <h5 className="rounded-lg" style={{display:"inline",marginLeft:"30px"}} >{ele.title}</h5>
                    </div>
                    <p className="rounded-lg" style={{display:"inline",marginLeft:"30px"}} >{ele.data}</p>
                  </div>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </div>
    <div className='container-fluid bg-secondary position-fixed bottom-0 pb-2'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <BottomNavigation
            // value={value} onChange={handleChange} 
            className='bg-secondary'
          >
            <Link
              to={`/Home`}
            >
              <img src={local} alt="" className='p-3 w-150 h-100' />
            </Link>
            <Link
              to={`/LocalStorage`}
            >
              <img src={local1} alt="" className='p-3 w-150 h-100' />

            </Link>
            <Link
              to={`/Upload`}
            >
              <img src={local2} alt="" className='p-3 w-150 h-100' />

            </Link>
            <Link
              to={`/Notifications`}
            >
              <img src={local3} alt="" className='p-3 w-150 h-100' />

            </Link>
            <Link
              to={`/Profile`}
            >
              <img src={local4} alt="" className='p-3 w-150 h-100' />

            </Link>
          </BottomNavigation>
        </div>
      </div>
    </div>
  </div>;
}

export default LocalStorage;
