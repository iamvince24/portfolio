import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      <div className="Navigation">
        <Link className="logo" to="/">
          My Name is Vince
        </Link>
        <div className="NavigationList">
          <a
            className="NavigationItem"
            href="https://zenn.dev/mynameisvince"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <Link className="NavigationItem" to="/project">
            Project
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;
