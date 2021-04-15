import React from "react";

import { Wrapper } from "./Text.elements";

const Text = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Text;
