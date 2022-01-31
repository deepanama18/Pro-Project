import React from 'react';
import notify from '../images/Notifications.png'
import { Link } from "react-router-dom";
import local1 from '../images/icons2.png';
import local2 from '../images/icons3.png';
import local3 from '../images/icons4.png';
import local4 from '../images/icons5.png';

function Notifications() {
  return <div>
      <div>
      <img src={notify} alt='' height={"600px"} width={"300px"} 
           style={{marginTop:"30px"}}
      />

      </div>
  </div>;
}

export default Notifications;
