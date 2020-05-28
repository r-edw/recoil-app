import React from "react";

const Avatar = ({img}) => (
  <img
    className="avatar"
    src={img}
    style={{
      "vertical-align": "middle",
      width: "100px",
      height: "100px",
      "border-radius": "50%"
    }}
  />
);

export default Avatar;
