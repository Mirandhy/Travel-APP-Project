import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  const handleLogout = () => {
    //Clear LocalStorage and Return to home page by refreshing
    localStorage.clear();
    location.href = "/";
  };
  return (
    <nav className="nav-bar">
      <Link
        className="nav-bar-brand"
        to="/"
        style={{ textDecoration: "none", color: "#0056b3" }}
      >
        <h3>Booking Tours App</h3>
      </Link>

      <div className="nav-bar-links">
        <Link className="nav-link" to="/tours">
          Tours
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        {user ? (
          <>
            <div
              className="nav-link"
              onClick={handleLogout}
              style={{ backgroundColor: "tomato", color: "#fff" }}
            >
              Sign Out
            </div>
            <Link
              className="nav-link"
              to="/"
              style={{
                backgroundColor: "#0b6aa8",
                color: "white",
                textDecoration: "none",
              }}
            >
              My Profile
            </Link>
          </>
        ) : (
          <Link className="nav-link" to="/sign-up">
            Create an account
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
