import React from "react";

function Bar({ barName, BarClassNameList }) {
  //   const barClassArray = barClassName;
  const BarClassElementList = BarClassNameList.map((name) => (
    <div className="BarMenuName">{name}</div>
  ));

  return (
    <div className="Bar">
      <div className="BarTitle">{barName}</div>
      <div className="BarMenu">{BarClassElementList}</div>
    </div>
  );
}

export default Bar;
