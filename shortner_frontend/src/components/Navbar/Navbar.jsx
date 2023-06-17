import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import Avatar from "../Avatar/Avatar";
import decode from "jwt-decode";
import SearchBar from "../Searchbar/SearchBar";

const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <div className="url__navbar">
      <div className="url__navbar-inner">
        <div className="url__navbar-links">
          <Link to="/" className="url__navbar-links_logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {User !== null && <div className="serachBar">
          <SearchBar/></div>}

        <div className="url__navbar-sign">
          {User === null ? (
            <Link to="/Auth" className="button">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#00a7ca"
                px="25px"
                py="15px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  // to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User?.result?.email.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="button" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
          {/* <Link to='/auth' className="button">Sign up</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// const Menu = () => (
//   <>
//     <p>
//       <NavLink>Home</NavLink>
//     </p>
//     <p>
//       <NavLink>What is url</NavLink>
//     </p>
//     <p>
//       <NavLink>Open AI</NavLink>
//     </p>
//     <p>
//       <NavLink>Case Studies</NavLink>
//     </p>
//     <p>
//       <NavLink>Library</NavLink>
//     </p>
//   </>
// );
