import React from 'react'
import { Link } from "react-router-dom";
import Illustation from '../images/Onboarding.png'

function Onbording() {


    return <div>
        <Link 
        to={`/Home`}
        >
        <img src={Illustation} alt='onbord img' 
              height={"700px"} width={"400px"} 
           style={{justifyContent:"center"}}
        />
        </Link>
    </div>;
}

export default Onbording;
