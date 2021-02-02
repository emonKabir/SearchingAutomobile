import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="pb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Cars
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
