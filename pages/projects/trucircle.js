import React from "react";
import Image from "next/image";
import Text from "../../components/Text/Text";
import FindingCard from "../../components/FindingCard/FindingCard";
import Section from "../../components/Section/Section";
import data from "../../data/trucircle.json";
import styled from "styled-components";

const Hero = styled(Section)`
  text-align: center;
  height: calc(100vh - 60px);
  padding: 4.5rem 0;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TrucirclePage = (props) => {
  console.log("tru", data);
  console.log(props);

  return (
    <>
      <Hero>
        <div>
          <Image src="/heroTru.png" width={960} height={700} />
          <Text as="h3" m="1.5rem 0">
            {data.name}
          </Text>
        </div>
        <Text as="p">SCROLL FOR MORE</Text>
      </Hero>
    </>
  );
};

export default TrucirclePage;
