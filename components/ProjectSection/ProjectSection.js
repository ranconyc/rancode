import React from "react";
import Section from "../Section/Section";
import Text from "../Text/Text";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { FlexBox, FlexItem } from "../../styles/globalStyles";

const Container = styled(FlexBox)`
  a {
    height: 100%;
    width: 100%;
  }
  h1 {
    margin-top: 1em;
    font-size: 2.5rem;
    padding-bottom: 1.5em;
  }
  text-align: center;
`;

const ProjectSection = ({ imgSrc, title, slug, ...props }) => {
  return (
    <Link href={slug}>
      <a>
        <Container
          wrap="true"
          align="center"
          padding="2em 0"
          as="section"
          {...props}
        >
          <FlexItem basis="100%">
            <Image src={imgSrc} width="270" height="260" />
          </FlexItem>
          <FlexItem basis="100%">
            <Text as="h1">{title}</Text>
            <p>LEARN MORE</p>
          </FlexItem>
        </Container>
      </a>
    </Link>
  );
};

export default ProjectSection;
