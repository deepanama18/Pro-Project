import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Link } from "react-router-dom";
import local from "../images/icons1.png";
import local1 from "../images/icons2.png";
import local2 from "../images/icons3.png";
import local3 from "../images/icons4.png";
import local4 from "../images/icons5.png";
import stroke from "../images/Stroke.png";
import axios from "axios";
import prof from "../images/Profile (2).png";

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/profile").then((res) => {
      setProfile(res.data);
    });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <img
            src={prof}
            alt="Page"
            className="img-fluid img-responsive"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="row mb-2 py-3">
        <div className="col-md-4 mx-auto">
          <div className="row mx-auto">
            {profile.map((ele) => (
              <>
                <div className="col-md-12">
                  <div className="card bg-secondary my-2 rounded-5">
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5 className="rounded-lg text-warning">{ele.title}</h5>
                      <Link to={`/StorageManagement`}>
                        <img src={stroke} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 mx-auto">
          <div className="row mx-auto">
            {profile.map((ele) => (
              <>
                <div className="col-md-12">
                  <div className="card bg-secondary my-2 rounded-5">
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5 className="rounded-lg text-warning">{ele.title2}</h5>
                      <img src={stroke} alt="" />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 mx-auto">
          <div className="row mx-auto">
            {profile.map((ele) => (
              <>
                <div className="col-md-12">
                  <div className="card bg-secondary my-2 rounded-5">
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5 className="rounded-lg text-warning">{ele.title1}</h5>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 mx-auto">
          <div className="row mx-auto">
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
