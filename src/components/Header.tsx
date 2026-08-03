import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#5647B7",
  };

  return (
    <header>
      <Link to="/"></Link>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
