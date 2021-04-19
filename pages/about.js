import React from "react";
import Head from "next/head";
import EduCard from "../components/EduCard/EduCard";
import SkillCard from "../components/SkillCard/SkillCard";
import Image from "next/image";
import styled from "styled-components";
import { BaseContainer, FlexBox } from "../styles/globalStyles";
import Data from "../data/about.json";

const Container = styled(BaseContainer)`
  & > article {
    padding: 1em 0;
  }
`;

const Skills = styled(FlexBox)`
  /* border: 1px solid red; */
  text-align: center;
  & > * {
    max-width: 159px;
    flex-basis: calc(50% - 0.5em);
    margin: 0.25em;
  }
`;

const AboutPage = () => {
  console.log(Data.skills);
  const { title, content, image, education, skills } = Data;
  return (
    <>
      <Head>
        <title>RAN COHEN | ABOUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <article>
          <h1>{title}</h1>
          <Image src={image.path} alt={image.alt} width="960" height="760" />
          <p>{content}</p>
        </article>
        <article>
          <h4>Education</h4>
          {education.map((edu) => (
            <EduCard
              key={edu.subject}
              img={edu.image}
              name={edu.name}
              subject={edu.subject}
              link={edu.link}
            />
          ))}
        </article>
        <article>
          <h4>Skills</h4>
          <Skills wrap="true">
            {skills.map((skill) => (
              <SkillCard icon={skill.icon} name={skill.name} />
            ))}
          </Skills>
        </article>
      </Container>
    </>
  );
};

export default AboutPage;
