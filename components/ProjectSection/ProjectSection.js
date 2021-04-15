import React from "react";
import Section from "../Section/Section";
import Text from "../Text/Text";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Container = styled(Section)`
  a {
    height: 100%;
    display: grid;
    place-items: center;

    h1 {
      margin-top: 1em;
      font-size: 2.5rem;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  width: 100%;
`;

const ProjectSection = ({ imgSrc, title, slug, ...props }) => {
  // PSODO CODE HERE
  // create a flex box
  // create 2 childern with flex-basis the
  // 100% on small screens and 50% on large screenshots

  return (
    <Container hero {...props}>
      <Link href={slug}>
        <a>
          <Content>
            <Image src={imgSrc} width={270} height={260} layout="responsive" />
            <Text as="h1">{title}</Text>
            <p>LEARN MORE</p>
          </Content>
        </a>
      </Link>
    </Container>
  );
};

export default ProjectSection;
