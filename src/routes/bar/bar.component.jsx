import React from "react";

import './bar.component.style.scss'

function Bar({barName, barClassName}){
    const barClassArray = barClassName;
    const barClass = barClassArray.map((name) => <div className="blogBarMenuName">{name}</div>)

    return(
        <div className="blogBar">
            <div className="blogTitle">
                {barName}
            </div>
            <div className="blogBarMenu">
                {barClass}
            </div>
        </div>
    )
}

export default Bar;
