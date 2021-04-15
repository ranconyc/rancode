import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background: ${({ theme }) => theme && theme.primary};
`;
