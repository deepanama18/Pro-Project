import React,{useEffect,useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import local from '../images/icons1.png';
import local1 from '../images/icons2.png';
import local2 from '../images/icons3.png';
import local3 from '../images/icons4.png';
import local4 from '../images/icons5.png';
import { Link } from "react-router-dom";
import axios from 'axios';


function StorageManagement() {

  const [state, setState] = useState([])

useEffect(()=>{
  axios.get("http://localhost:3003/storage").then(res=>{
    setState(res.data)
  })
},[])

  return <div>
    <h1 style={{ margin: "50px" }}>Storage Management</h1>
  <div>
      <div className='row' >
        {
          state.map(ele => (
            <>
              <div className="col-md-12" 
              style={{justifyContent:"center",display:"flex",flexDirection:"column"}}
              >
                <div className="card bg-secondary my-2" >
                  <div className="card-body" >
                    <div
                    //  style={{ display: "flex" ,justifyContent:"space-between"}}
                    style={{ display: "flex",justifyContent:"center" }}
                    >
                      <img src={ele.images} style={{display:"inline"}}/>
                      <h5 className="rounded-lg" 
                      style={{display:"inline",marginLeft:"30px"}}
                      // style={{display:"inline",marginRight:"80px"}} 
                       >{ele.title}</h5>
                    </div>
                    <p className="rounded-lg" 
                    style={{display:"inline",marginLeft:"30px"}}
                    // style={{display:"inline",marginRight:"60px"}}
                     >{ele.data}</p>
                    <div style={{textAlign:"right"}}>
                    <img src={ele.image} />
                    </div>
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

export default StorageManagement;
