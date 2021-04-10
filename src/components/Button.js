import React from "react";
import "./Button.css";

const Button = ({ imp, text, link }) => {
  return (
    <div className="button">
      {imp}
      {text}
      {link}
    </div>
  );
};

export default Button;
