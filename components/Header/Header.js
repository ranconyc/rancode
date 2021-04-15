import React from "react";
import { Container } from "./Header.elements";

const Header = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Header;
