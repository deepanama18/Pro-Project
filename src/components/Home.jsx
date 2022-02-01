import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Link } from "react-router-dom";
import local from "../images/icons1.png";
import local1 from "../images/icons2.png";
import local2 from "../images/icons3.png";
import local3 from "../images/icons4.png";
import local4 from "../images/icons5.png";
import axios from "axios";

function Home() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/user").then((res) => {
      setHome(res.data);
    });
  }, []);

  const getSearchKey = (keyword) => {
    axios.get("http://localhost:3003/user?q=" + keyword).then((res) => {
      setHome(res.data);
    });
  };

  return (
    <>
      <h1 className="my-2" style={{ color: "blue" }}>
        Home Page
      </h1>
      <input
        type="text"
        style={{ marginTop: "30px", textAlign: "center", padding: "10px" }}
        placeholder="Search"
        onChange={(e) => getSearchKey(e.target.value)}
      />
      <div className="container my-4 py-6">
        <div className="row">
          {home.map((ele) => (
            <>
              <div className="col-md-6">
                <div className="card bg-secondary my-2">
                  <div className="card-body">
                    <h5 className="rounded-lg">{ele.title}</h5>

                    <p className="rounded-lg">{ele.data}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="container-fluid bg-secondary position-fixed bottom-0 pb-2">
        <div className="row">
          <div className="col-md-12 text-center">
            <BottomNavigation
              value={value}
              onChange={handleChange}
              className="bg-secondary"
            >
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

export default Home;
