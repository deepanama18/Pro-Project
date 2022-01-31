import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from "react-router-dom";
import icontab from '../images/icons_tabbar_statscopy.png'
import Illustation from '../images/Onboarding.png'

function Onbording() {


    return <div>
        {/* <h1 style={{marginTop:"50px"}}>Cloud Storage</h1> */}
        <Link style={{marginTop:"50px"}}
        to={`/Home`}
        >
        <img src={Illustation} alt='onbord img' height={"600px"} width={"300px"} 
          style={{marginTop:"30px"}}
        />
        {/* <img src={icontab} alt='' /> */}
        {/* <ArrowCircleRightIcon /> */}
        </Link>
    </div>;
}

export default Onbording;
