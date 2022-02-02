import React from "react";
import { Link } from "react-router-dom";
import Illustation from "../images/Onboarding.png";

function Onbording() {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <Link to={`/Home`}>
            <img
              src={Illustation}
              alt="Page"
              className="img-fluid img-responsive"
              style={{ width: "200%", height: "80%" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Onbording;
