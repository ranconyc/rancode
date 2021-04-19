import React from "react";
import { Container } from "./ProcessCard.elements";
import {
  FaLightbulb,
  FaSearch,
  FaPencilRuler,
  FaMobileAlt,
} from "react-icons/fa";

const ProcessCard = ({ icon, title, tools, ...props }) => {
  return (
    <Container {...props}>
      {icon === "FaLightbulb" && <FaLightbulb size="2em" />}
      {icon === "FaSearch" && <FaSearch size="2em" />}
      {icon === "FaPencilRuler" && <FaPencilRuler size="2em" />}
      {icon === "FaMobileAlt" && <FaMobileAlt size="2em" />}
      <h4>{title}</h4>
      <ul>
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ProcessCard;
