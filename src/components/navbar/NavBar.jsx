import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => { // Define the NavBar functional component with a user prop
  const handleLogout = () => {
    //Clear LocalStorage and Return to home page by refreshing
    localStorage.clear();
    location.href = "/";
  };
  return (
    <nav className="nav-bar">
       {/* Brand link to the home page */}
      <Link
        className="nav-bar-brand"
        to="/"
        style={{ textDecoration: "none", color: "#0056b3" }}
      >
        <h3>Booking Tours App</h3>
      </Link>

      <div className="nav-bar-links">
         {/* Navigation links */}
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
          // Conditional rendering for authenticated user
          <>
             {/* Sign out button */}
            <div
              className="nav-link"
              onClick={handleLogout}
              style={{ backgroundColor: "tomato", color: "#fff" }}
            >
              Sign Out
            </div>
            {/* My Profile link */}
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
          // Conditional rendering for autohorized user
          <Link className="nav-link" to="/sign-up">
            Create an account
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
