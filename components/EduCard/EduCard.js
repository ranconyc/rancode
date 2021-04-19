import React from "react";
import styled from "styled-components";
import { Card } from "../../styles/globalStyles";
import Image from "next/image";
import Link from "next/link";

const Container = styled(Card)`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  transition: border 0.3s ease-in;
  & > div {
    margin-left: 1em;
  }

  h4 {
    margin-bottom: 0.1em;
    color: #fd070e;
  }
  p {
    margin: 0;
  }

  & :hover {
    border: 2px solid #fd070e;
  }
`;

const EduCard = ({ link, img, name, subject, ...props }) => {
  return (
    <Link href={link}>
      <a target="_blank">
        <Container {...props}>
          <Image src={img} width="50" height="50" />
          <div>
            <h4>{name}</h4>
            <p>{subject}</p>
          </div>
        </Container>
      </a>
    </Link>
  );
};

export default EduCard;
