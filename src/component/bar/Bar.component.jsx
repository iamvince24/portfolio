import React, { Fragment } from "react";

function Bar({ BarName }) {
  return (
    <Fragment>
      <div className="Bar">
        <div className="BarTitle">{BarName}</div>
        <div className="BarTitleLine"></div>
      </div>
    </Fragment>
  );
}

export default Bar;
