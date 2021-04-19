import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* resets */
*, *:before, *:after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
}

html, body{
  box-sizing: border-box;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  overflow: auto;
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.textPrimary};
      font-family: ${theme.fonts.primary};
      background: ${theme.bgColor};
    `};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${({ theme }) => theme && theme.fonts.heading};
  line-height: 1.2;
margin-bottom: .75rem;}

h1 {
  font-size: ${({ theme }) => theme && theme.fontSize.h1};
}

h2 {
  font-size: ${({ theme }) => theme && theme.fontSize.h2};
}

h3 {
  font-size: ${({ theme }) => theme && theme.fontSize.h3};
}

h4 {
  font-size: ${({ theme }) => theme && theme.fontSize.h4};
}

h5 {
  font-size: ${({ theme }) => theme && theme.fontSize.h5};
}

h6 {
  font-size: ${({ theme }) => theme && theme.fontSize.h6};
}

p {
  font-size: ${({ theme }) => theme && theme.fontSize.body1};
  margin-bottom: .75rem;
  line-height: 1.6;
}

a {
  font-size: ${({ theme }) => theme && theme.fontSize.body1};
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

li {
  list-style: none;
}
em {

}
`;

export const color = css`
  color: ${({ color }) => color && color};
`;

export const size = css`
  font-size: ${({ size }) => size && size};
`;

// === components ===

// layout
export const BaseContainer = styled.div`
  /* border: 1px solid orange; */
  height: 100%;
  width: 90%;
  max-width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 992px) {
    max-width: 970px;
  }
`;

export const Card = styled.div`
  padding: ${({ padding }) => (padding ? padding : "1rem")};
  ${({ theme }) =>
    theme &&
    css`
      background: ${theme.textPrimary};
      color: ${theme.secondary};
      border-radius: ${theme.radius.s};
    `};
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
  flex-direction: ${({ column }) => column && "column"};
  justify-content: ${({ justify }) => justify && justify};
  align-items: ${({ align }) => align && align};
  height: ${({ height }) => height && height};
  background: ${({ bgColor }) => bgColor && bgColor};
  padding: ${({ padding }) => padding && padding};
`;

export const FlexItem = styled.div`
  flex-shrink: ${({ shrink }) => shrink};
  flex-basis: ${({ basis }) => basis};
  flex-grow: ${({ grow }) => grow};
  text-align: ${({ align }) => align && align};
  height: ${({ height }) => height && height};
  background: ${({ bgColor }) => bgColor && bgColor};
  color: ${({ color }) => color && color};
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};

  @media screen and (min-width: 768px) {
    flex-basis: ${({ mBasis }) => mBasis};
  }

  @media screen and (min-width: 992px) {
    flex-basis: ${({ lBasis }) => lBasis};
  }
`;
