import React from "react";
import circle from ".//circle-regular.svg";
import userprofile from ".//user-solid.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    props.showAlert("Logged out successfully", "success");
  };
  const Area = () => {
    /*    const user_profile = [
      { id: 1, name: "Circle", image: "./circle-regular.svg" },
      { id: 2, name: "Profile", image: "./user-solid.svg" },
    ]; */

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              /* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */
              <>
                <Link
                  className="btn btn-primary mx-1"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>
              </>
            ) : (
              /* </form> */
              <>
                <div
                  className=" flex-right mx-4 "
                  style={{ position: "relative" }}
                >
                  <Link to="/profile">
                    <img
                      key={2}
                      src={userprofile}
                      alt={""}
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        alignItems: "center",
                        left: "7px",
                        top: "6px",
                      }}
                    ></img>
                    <img
                      key={1}
                      src={circle}
                      alt={""}
                      style={{
                        width: "35px",
                        height: "35px",
                        alignItems: "center",
                      }}
                    ></img>
                  </Link>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  };
  return Area();
};

export default Navbar;
