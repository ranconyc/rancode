import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  height: 100%;
`;

const Layout = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Navbar {...props} />
      {children}
    </Container>
  );
};

export default Layout;
