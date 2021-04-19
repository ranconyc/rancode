import React from "react";
import styled from "styled-components";
import ProcessCard from "../../components/ProcessCard/ProcessCard";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import Section from "../../components/Section/Section";
import data from "../../data/trucircle.json";
import { BaseContainer, FlexBox } from "../../styles/globalStyles";

const Content = styled.div`
  padding: 2em 0 4em 0;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 3em;
  }
  h3 {
    font-size: 1.728rem;
    margin-bottom: 0.5em;
  }
`;

const Process = styled(FlexBox)`
  justify-content: center;
  & > * {
    flex-basis: calc(50% - 0.5em);
    margin: 0 0.5em 0.5em 0;
  }
`;

const TrucirclePage = (props) => {
  console.log("tru", data);
  return (
    <>
      <ProjectHero />
      <Section>
        <BaseContainer>
          <Content>
            <h2>ABOUT THE PROJECT</h2>
            <h3>Explaining therapists the power of telemedicine</h3>
            <p>
              I was hired by Trucircle to improve the web experience and grow
              the number of therapists who upgrade from the free directory plan
              to premium add-on services offered by Trucircle.
            </p>
          </Content>
          <h5>Process</h5>
          <Process wrap="true" height="auto">
            {data.steps.map((step) => (
              <ProcessCard
                icon={step.icon}
                title={step.title}
                tools={step.tools}
              />
            ))}
          </Process>
        </BaseContainer>
      </Section>
    </>
  );
};

export default TrucirclePage;
