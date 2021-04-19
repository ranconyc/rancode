import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ScrollingProgress from "../ScrollingProgress/ScrollingProgress";
import styled from "styled-components";
import { BaseContainer } from "../../styles/globalStyles";

const Main = styled.div`
  margin-top: 56px;
`;

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header>
        <Navbar {...props} />
        <ScrollingProgress />
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
