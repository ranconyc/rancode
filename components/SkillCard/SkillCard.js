import React from "react";
import { Container } from "./SkillCard.elements";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiStyledComponents,
  SiGithub,
  SiGooglechrome,
  SiSketch,
  SiNextDotJs,
  SiGatsby,
  SiRuby,
  SiRails,
  SiMongodb,
  SiPostman,
  SiNodeDotJs,
} from "react-icons/si";
import { AiTwotoneApi, AiOutlineConsoleSql } from "react-icons/ai";

const SkillCard = ({ icon, name }) => {
  return (
    <Container>
      {icon === "SiHtml5" && <SiHtml5 />}
      {icon === "SiCss3" && <SiCss3 />}
      {icon === "SiJavascript" && <SiJavascript />}
      {icon === "SiReact" && <SiReact />}
      {icon === "SiReactrouter" && <SiReactrouter />}
      {icon === "SiRedux" && <SiRedux />}
      {icon === "SiNextDotJs" && <SiNextDotJs />}
      {icon === "SiStyledComponents" && <SiStyledComponents />}
      {icon === "SiGithub" && <SiGithub />}
      {icon === "SiGooglechrome" && <SiGooglechrome />}
      {icon === "SiSketch" && <SiSketch />}
      {icon === "AiTwotoneApi" && <AiTwotoneApi />}
      {icon === "SiGatsby" && <SiGatsby />}
      {icon === "SiRuby" && <SiRuby />}
      {icon === "SiRails" && <SiRails />}
      {icon === "SiMongodb" && <SiMongodb />}
      {icon === "SiPostman" && <SiPostman />}
      {icon === "SiNodeDotJs" && <SiNodeDotJs />}
      {icon === "AiOutlineConsoleSql" && <AiOutlineConsoleSql />}
      <h5>{name}</h5>
    </Container>
  );
};

export default SkillCard;
