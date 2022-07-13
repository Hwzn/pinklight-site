import React from "react";
import Iconlogin from "./Iconlogin";
import Heart from "../../images/icon/heart.svg";
import Shopping from "../../images/icon/shopping.svg";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navpost from "../../components/posts/navpost";
import Iconprofile from "./Iconprofile";

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar__item row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="navbar__icons">
                {localStorage.getItem("token") === null ?<Iconlogin/>: <Iconprofile/>}

                <NavLink to="/favorite">
                  <img src={Heart} alt="heart" />
                </NavLink>
                <NavLink to="/cart">
                  <img src={Shopping} alt="shopping" />
                </NavLink>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="navbar__advertisement">
                <Navpost/>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="navbar__logo">
                <NavLink to="/">
                  <img src={Logo} alt="Logo" />
                </NavLink>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="navbar__input">
                <input type="text" placeholder="عن ماذا تبحث ؟" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
