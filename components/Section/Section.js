import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: ${(props) => (props.hero ? "calc(100vh - 60px)" : "auto")};
  background: ${({ bgColor }) => bgColor && bgColor};
  color: ${({ color }) => color && color};
`;

const Section = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Section;
