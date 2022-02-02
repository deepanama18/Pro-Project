import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import local from "../images/icons1.png";
import local1 from "../images/icons2.png";
import local2 from "../images/icons3.png";
import local3 from "../images/icons4.png";
import local4 from "../images/icons5.png";
import { Link } from "react-router-dom";
import axios from "axios";
import store from "../images/storage.png";

function StorageManagement() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/storage").then((res) => {
      setState(res.data);
    });
  }, []);

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <img
            src={store}
            alt="Page"
            className="img-fluid img-responsive"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div>
        <div className="row mb-2">
          <div className="col-md-4 mx-auto">
            <div className="row mx-auto">
              {state.map((ele) => (
                <>
                  <div className="col-md-12">
                    <div className="card bg-secondary my-2 rounded-5">
                      <div
                        className="card-body"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img src={ele.images} style={{ display: "inline" }} />
                        <h5
                          className="rounded-lg text-warning"
                          style={{ display: "inline", marginLeft: "30px" }}
                        >
                          {ele.title}
                        </h5>
                        <p
                          className="rounded-lg text-white text-uppercase"
                          style={{ display: "inline", marginLeft: "30px" }}
                        >
                          {ele.data}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
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
    </div>
  );
}

export default StorageManagement;
