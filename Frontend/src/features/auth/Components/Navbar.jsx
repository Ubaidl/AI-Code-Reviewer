import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../auth.context";
import "../style/Navbar.scss";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);

    // Later you can also call your backend logout API
    // await logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Code Analyzer</Link>
      </div>

      <div className="navbar-links">
        {user ? (
          <>
            

            <Link to="/analysis">
              Code Review
            </Link>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;