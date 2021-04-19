import { Card } from "../../styles/globalStyles";
import styled from "styled-components";

export const Container = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  svg {
    font-size: 2em;
  }
  h5 {
    margin-bottom: 0;
    margin-top: 0.5em;
  }
`;
