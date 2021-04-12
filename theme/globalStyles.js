import styled, { createGlobalStyle, css } from "styled-components";
export const GlobalStyle = createGlobalStyle`
/* resets */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: auto;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.primary};
      background: ${theme.bgColor};
      color: ${theme.text};
    `};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${({ theme }) => theme && theme.fonts.heading};
  line-height: 1.1;
  text-transform: capitalize;
}

h1 {
  font-size: 2.75rem;

  margin: 0.75rem 0;
}

h2 {
  font-size: 2.25rem;

  margin: 0.75rem 0;
}

h3 {
  font-size: 2rem;

  margin: 0.75rem 0;
}

h4 {
  font-size: 1.75rem;

  margin: 0.75rem 0;
}

h5 {
  font-size: 1.5rem;

  margin: 0.75rem 0;
}

h6 {
  font-size: 1rem;

  margin: 0.75rem 0;
}

p {
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const Button = styled.button`
  color: #0c9468;
  background-color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-weight: bold;
  ${({ primary }) =>
    primary &&
    css`
      background: #0c9468;
      color: #fff;
    `}
`;
