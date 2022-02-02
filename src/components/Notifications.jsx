import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import local from "../images/icons1.png";
import local1 from "../images/icons2.png";
import local2 from "../images/icons3.png";
import local3 from "../images/icons4.png";
import local4 from "../images/icons5.png";
import notify from "../images/Notifications.png";

function Notifications() {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <img
            src={notify}
            alt="Page"
            className="img-fluid img-responsive"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
      </div>
      <div>
        <div className="row" >
          <div className="col-md-4 mx-auto">
            <div className="row" >
              <BottomNavigation className="bg-secondary  bottom-0">
                <Link to={`/Home`}>
                  <img src={local} alt="" className="p-3 w-150 h-100" />
                </Link>
                <Link to={`/LocalStorage`}>
                  <img src={local1} alt="" className="p-3 w-150 h-100" />
                </Link>
                <Link to={`/Upload`}>
                  <img src={local2} alt="" className="p-3 w-150 h-100" />
                </Link>
                <Link to={`/Notifications`}>
                  <img src={local3} alt="" className="p-3 w-150 h-100" />
                </Link>
                <Link to={`/Profile`}>
                  <img src={local4} alt="" className="p-3 w-150 h-100" />
                </Link>
              </BottomNavigation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
