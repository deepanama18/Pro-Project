import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

function Home() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/user").then(res => {
      setHome(res.data)
    })
  }, [])

  return (
    <>
    <div height={"600px"} width={"300px"} >
      <h1 >Home Page</h1>
      <div className="container">
      <div className="row">
    
            {
              home.map(ele => (
                <>
                <div className="col-md-4" style={{width:"150px", height:"150px",margin:"20px",padding:"20px"}} >
                  <div className="card bg-secondary my-2" >
             
                    <div className="card-body" >
                      <h5 className="rounded-lg">{ele.title}</h5>

                      <p className="rounded-lg">{ele.data}</p>
                    </div>
                  </div>
                  </div>
                </>
              ))
            }
            </div>
            <div className='col-md-6'>

            </div>
            </div>
    
      <BottomNavigation value={value} onChange={handleChange}
        style={{marginLeft:"10px", padding:"30px"}}
        // position:"fixed", bottom:"0"
      >
        <Link
          to={`/Home`}
        >
          <img src={local} alt="" />
        </Link>
        <Link
          to={`/LocalStorage`}
        >
          <img src={local1} alt="" />
          
        </Link>
        <Link
          to={`/Upload`}
        >
          <img src={local2} alt="" />
          
        </Link>
        <Link
          to={`/Notifications`}
        >
          <img src={local3} alt="" />
        
        </Link>
        <Link
          to={`/Profile`}
        >
          <img src={local4} alt="" />
         
        </Link>
      </BottomNavigation>
      </div>
    </>
  );
}

export default Home