import React from "react";
import { Link, Outlet } from "react-router-dom";
import cocktailLogo from "../cocktail-db-logo.svg";
function Layout() {
  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar-center">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="about">About</Link>
            </li>

            <li>
              <Link to="contact">Contacts</Link>
            </li>

            {/* <li>
              <Link to="cocktail">Cocktail</Link>
            </li> */}
          </ul>
          <Link to="/">
            <img src={cocktailLogo} alt="cocktaildb-logo" />
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
