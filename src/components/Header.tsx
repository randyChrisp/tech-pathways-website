import { useState } from "react";
import imageLogo from "../images/TPI black bg.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#FFFFFF",
  };

  const [showLinks, setShowLinks] = useState(false);
  const navToggle = () => {
    setShowLinks((current) => !current);
  };

  return (
    <header>
      <div className="nav-center">
        <img src={imageLogo} className="nav-logo" alt="logo" />
        <button className="nav-toggle" onClick={navToggle}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* links */}
      <ul className={showLinks ? "links show-links" : "links"}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to=""
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Projects
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="cap"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Capability Statement
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
