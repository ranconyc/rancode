import styled from "styled-components";
import { color, size } from "../../styles/globalStyles";

export const Wrapper = styled.h1`
  ${color};
  ${size};
  text-align: ${({ align }) => align && align};
  text-transform: ${({ transformations }) => transformations};
  margin: ${({ m }) => m};
`;
