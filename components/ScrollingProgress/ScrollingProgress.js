import React from "react";
import styled from "styled-components";
import useScroll from "../../hooks/useScroll";

export const Bar = styled.div`
  background: #fff;
  width: ${({ progress }) => progress && progress}%;
  height: 4px;
  position: absolute;
  bottom: 0;
`;

const ScrollingProgress = () => {
  const { leftToScroll } = useScroll();
  return <Bar progress={leftToScroll} />;
};

export default ScrollingProgress;
