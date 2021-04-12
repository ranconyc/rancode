import React from "react";
import styled from "styled-components";
import { Button } from "../theme/globalStyles";

const Container = styled.nav``;

const Navbar = ({ setTheme, theme }) => {
  const themeToggler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Container>
      <Button primary onClick={themeToggler}>
        change theme
      </Button>
    </Container>
  );
};

export default Navbar;
