import React from "react";
import Image from "next/image";
import { Container, Content } from "./ProjectHero.elements";

const ProjectHero = () => {
  return (
    <Container>
      <Content>
        <Image src="/heroTru.png" width="468" height="360" />
        <h1>TruCircle</h1>
        <p>Scroll for More</p>
      </Content>
    </Container>
  );
};

export default ProjectHero;
