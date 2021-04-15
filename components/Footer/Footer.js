import React from "react";
import { Container, Content } from "./Footer.elements";

const Footer = ({ ...props }) => {
  return (
    <Container {...props}>
      <Content>
        <h3>Lets Work Together...</h3>
        <p>RANCODE2020@GMAIL.COM</p>
        <p>Copyright 2021 Ran Cohen</p>
      </Content>
    </Container>
  );
};

export default Footer;
