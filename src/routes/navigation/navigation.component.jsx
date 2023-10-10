import React from "react";

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Fragment>
      <div class="navigation">
        <Link class="logo" to="/">
          Home
        </Link>
        <div class="navigationList">
          <a
            class="navigationItem"
            href="https://zenn.dev/mynameisvince"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <Link class="navigationItem" to="/project">
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

export default NavigationBar;
