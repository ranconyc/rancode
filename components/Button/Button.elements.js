import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) =>
    theme &&
    css`
      background: ${theme.textPrimary};
      color: ${theme.primary};
      border: 1px solid ${theme.primary};
    `}
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  margin: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  :hover {
  }

  /* primary */
  ${({ primary, theme }) =>
    primary &&
    css`
      background: ${theme.primary};
      color: ${theme.secondary};
      border: 1px solid ${theme.primary};
    `}
  /* disabled */
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
