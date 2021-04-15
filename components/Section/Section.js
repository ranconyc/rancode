import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../styles/globalStyles";

const Container = styled.section`
  height: ${(props) => (props.hero ? "calc(100vh - 60px)" : "auto")};
  background: ${({ bgColor }) => bgColor && bgColor};
  color: ${({ color }) => color && color};
`;

const Content = styled(BaseContainer)``;

const Section = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Section;
