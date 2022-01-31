import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Onbording</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Home">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/LocalStorage">LocalStorage</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Upload">Upload</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Notifications">Notifications</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Profile">Profile</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/StorageManagement">StorageManagement</Link>
          </li>
        </ul>

      </div>
    </nav>
  </div>;
}

export default Nav;
