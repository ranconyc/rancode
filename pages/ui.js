import React from "react";
import FindingCard from "../components/FindingCard/FindingCard";
import Section from "../components/Section/Section";
import { FlexBox, FlexItem, Card } from "../styles/globalStyles";

import { SiStyledComponents, SiJavascript } from "react-icons/si";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

const Fcard = ({ title, icon }) => {
  return (
    <FlexItem
      basis="calc(100% / 2 - 0.4em)"
      bgColor="#fff"
      color="#000"
      align="center"
      margin=".2em"
      padding=""
    >
      {icon}
      <p>{title}</p>
    </FlexItem>
  );
};

const ui = () => {
  return (
    <Section>
      <FlexBox wrap="true">
        <Fcard title="HTML5" icon={<FaHtml5 />} />
        <Fcard title="CSS3" icon={<FaCss3Alt />} />
        <Fcard title="ReactJS" icon={<FaCss3Alt />} />
        <Fcard title="JavaScript" icon={<SiJavascript />} />
        <Fcard title="Styled Components" icon={<SiStyledComponents />} />
      </FlexBox>
    </Section>
  );
};

export default ui;
