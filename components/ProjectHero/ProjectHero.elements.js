import styled from "styled-components";
import { BaseContainer } from "../../styles/globalStyles";

export const Container = styled.div`
  background: linear-gradient(180deg, #2d7ec1 0%, #14488e 100%);
  height: calc(100vh - 56px);
`;

export const Content = styled(BaseContainer)`
  padding: 3em 0;
  /* border: 1px solid red; */
  text-align: center;

  > h1 {
    font-weight: 700;
    letter-spacing: 2px;
    margin: 1em 0 2em 0;
  }
`;
