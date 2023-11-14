import React from "react";

const Child = ({ ele, index }) => {
  // console.log(ele);
  return (
    <>
      <div className="look">
        {/* <h3>{`${ele.name.substr(0, 1)}`}</h3> */}
        <h3>{index}</h3>
        <h5>{ele.email}</h5>
        <p>{ele.body}</p>
      </div>
    </>
  );
};

export default Child;
