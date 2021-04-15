import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  justify-content: ${({ justify }) => justify && justify};
  align-items: ${({ align }) => align && align};
  height: ${({ height }) => height && height};
`;

// < FlexBox column justify="" align="" />

// < FlexItem basis="" grow="" shrink="" />
