import React from "react";
import { Wrapper } from "./Button.elements";

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Button;
