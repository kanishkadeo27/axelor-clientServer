import { NavLink } from "react-router-dom";

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "blue",
    };
  };
  return (
    <>
      <header>
        <nav className="navbar">
            <NavLink to="/fetch-api" style={navLinkStyles}>
              Fetch
            </NavLink>

            <NavLink to="/axios" style={navLinkStyles}>
              Axios
            </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
