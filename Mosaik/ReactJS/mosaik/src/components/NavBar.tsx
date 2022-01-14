import React from "react";
import { Link, NavLink } from "react-router-dom"
import logo from '../MosaikRealEstateLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () =>{
    return (
      <div className="content">
        <div className="NavBar">
          <div className="NavBar-Left">
            <Link to="/">
              <img src={logo} alt="" className="NavBar-Logo" />
            </Link>
          </div>
          <div className="NavBar-Center">
            <ul>
              <li>
                <NavLink className={(navData: any ): string => navData.isActive ? "Navbar-active": "" } to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={(navData: any ): string => navData.isActive ? "Navbar-active": "" } to="/settings">Settings</NavLink>
              </li>
              <li>
                <NavLink className={(navData: any ): string => navData.isActive ? "Navbar-active": "" } to="/store">Store</NavLink>
              </li>
            </ul>
          </div>
          <div className="NavBar-right">
            <div className="NavBar-icon">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>
            <div className="NavBar-icon">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    );
}
export default NavBar;