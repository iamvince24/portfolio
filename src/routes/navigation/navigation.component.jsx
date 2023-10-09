import React from "react";

import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';


function NavigationBar(){
    return (
        <Fragment>
            <div class="navigation">
                <Link class="logo" to='/'>
                    Home
                </Link>
                <div class="navigationList">
                    <Link class="navigationItem" to='/about'>About</Link>
                    <Link class="navigationItem" to='/blog'>Blog</Link>
                    <Link class="navigationItem" to='/project'>Project</Link>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </Fragment>
    )
}


export default NavigationBar;