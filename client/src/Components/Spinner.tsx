import React from "react";
import "../App.css";

const Spinner = (): React.ReactElement => {
  return (
    <div className="spinner">
      <div className="verticalCenter">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </div>
  );
};

export default Spinner;
