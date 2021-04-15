import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Content } from "./Navbar.elements";

const Navbar = ({ ...props }) => {
  return (
    <Container {...props}>
      <Content>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/">
          <a style={{ height: 30 }}>
            <Image src="/logo.svg" height={30} width={30} />
          </a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Content>
    </Container>
  );
};

export default Navbar;
