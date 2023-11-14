import React from "react";
import "../Loading/spinner.css";
const LoadingSpinner = () => {
  return (
    <>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default LoadingSpinner;
