import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      <div class="Navigation">
        <Link class="logo" to="/">
          My Name is Vince
        </Link>
        <div class="NavigationList">
          <a
            class="NavigationItem"
            href="https://zenn.dev/mynameisvince"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <Link class="NavigationItem" to="/project">
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
