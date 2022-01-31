import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import BottomNavigation from '@mui/material/BottomNavigation';
import CloudIcon from '@mui/icons-material/Cloud';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import local from '../images/icons1.png';
import local1 from '../images/icons2.png';
import local2 from '../images/icons3.png';
import local3 from '../images/icons4.png';
import local4 from '../images/icons5.png';
import nav from '../images/nav.png'
import axios from 'axios';

function Profile() {

  const [profile, setProfile] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3003/profile").then(res => {
      setProfile(res.data)
    })
  }, [])

  return <div>
    <div style={{ display: "flex", margin: "25px", marginLeft: "500px" }}>
      <h1 style={{ padding: "40px" }}>Profile</h1>
      <h1 style={{ padding: "40px" }}><img src={nav} alt='' /></h1>
    </div>
    <div style={{ display: "flex", marginLeft: "500px" }}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5c4737ad5b409bd645a3172f/1620070853109-4WT39EYV9ZYOWQ1TUYFW/AullsDocSpotlight.jpg"
        alt="girl"
        style={{ width: "80px", height: "80px" }}
        class="rounded-circle"></img>
      <h2 style={{ margin: "25px" }}>Jessie Roberts</h2>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col md-4'>
      {
        profile.map(ele => (
          <div 
          style={{ margin: "40px", marginLeft: "350px", padding: "20px" }}
           >
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{ele.title}</h5>
                  <h5 className="card-title">{ele.title2}</h5>
                  <h5 className="card-title">{ele.title1}</h5>
                </div>
            </div>

          </div>
        ))
      }
      </div>
      </div>
    </div>
    <div >
      {/* <h1 style={{marginTop:"40px"}}>Home Page</h1> */}
      <BottomNavigation sx={{ width: 500 }}
        style={{ marginTop: "100px", marginLeft: "350px" }}
      >
        <Link
          to={`/Home`}
        >
          <img src={local} alt="" />
          {/* <CloudIcon /> */}
        </Link>
        <Link
          to={`/LocalStorage`}
        >
          <img src={local1} alt="" />
          {/* <CheckCircleOutlineIcon /> */}
        </Link>
        <Link
          to={`/Upload`}
        >
          <img src={local2} alt="" />
          {/* <HealthAndSafetyIcon /> */}
        </Link>
        <Link
          to={`/Notifications`}
        >
          <img src={local3} alt="" />
          {/* <NotificationsIcon /> */}
        </Link>
        <Link
          to={`/Profile`}
        >
          <img src={local4} alt="" />
          {/* <PersonIcon /> */}
        </Link>
      </BottomNavigation>
    </div>
  </div>;
}

export default Profile;
