import React from "react";
import styled from "styled-components";
import { Card } from "../../styles/globalStyles";

const StyledCard = styled(Card)`
  height: 100 px;
  width: auto;
  flex: 1 1 400px;
  display: grid;
  place-items: center;
  margin-bottom: 10px;

  p {
    position: relative;
    z-index: 2;
    border: 1px solid red;
    margin: 0;
    font-size: 18px;
    line-height: 1.6;

    ::after {
      position: absolute;
      content: "";
      width: 24px;
      height: 24px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      z-index: 1;
      top: -8px;
      left: -8px;
    }
  }
`;

const FindingCard = ({ content, ...props }) => {
  return (
    <StyledCard {...props} as="li">
      <p>{content}</p>
    </StyledCard>
  );
};

export default FindingCard;
