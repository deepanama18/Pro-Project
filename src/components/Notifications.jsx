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
    <div>
      <div>
        <img
          src={notify}
          alt=""
          height={"700px"}
          width={"400px"}
          style={{ justifyContent: "center" }}
        />
        <div className="container-fluid bg-secondary position-fixed bottom-0 pb-2">
          <div className="row">
            <div className="col-md-12 text-center">
              <BottomNavigation className="bg-secondary">
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
