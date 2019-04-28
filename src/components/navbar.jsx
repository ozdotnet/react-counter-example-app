import React from "react";

//Simple Stateless Functional Component
//in Functional Components, 'this.props' won't work (it only works in Class Components), here props needs to be added as a parameter
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="_blank">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
