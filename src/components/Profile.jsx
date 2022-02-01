import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Link } from "react-router-dom";
import local from "../images/icons1.png";
import local1 from "../images/icons2.png";
import local2 from "../images/icons3.png";
import local3 from "../images/icons4.png";
import local4 from "../images/icons5.png";
import nav from "../images/nav.png";
import stroke from "../images/Stroke.png";
import userDetail from "../images/Udetails.png";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/profile").then((res) => {
      setProfile(res.data);
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ padding: "20px", margin: "30px" }}>
          Profile
          <img src={nav} alt="" />
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ padding: "5px", margin: "5px" }}>
          <img src={userDetail} alt="" />
        </h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col md-2">
            {profile.map((ele) => (
              <div>
                <div className="card bg-secondary my-2">
                  <div
                    className="card-body"
                    style={{
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5 className="card-title">{ele.title}</h5>
                    <Link to={`/StorageManagement`}>
                      <img src={stroke} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col md-2">
            {profile.map((ele) => (
              <div>
                <div className="card bg-secondary my-2">
                  <div
                    className="card-body"
                    style={{
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5 className="card-title">{ele.title2}</h5>
                    <img src={stroke} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col md-2">
            {profile.map((ele) => (
              <div>
                <div className="card bg-secondary my-2">
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <h5 className="card-title">{ele.title1}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
    </>
  );
}

export default Profile;
