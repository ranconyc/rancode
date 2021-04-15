import React from "react";
import { Container } from "./FlexBox.elements";

const FlexBox = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default FlexBox;
