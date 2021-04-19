import Head from "next/head";
import Image from "next/image";
import Text from "../components/Text/Text";
import Section from "../components/Section/Section";
import styled from "styled-components";
import { BaseContainer } from "../styles/globalStyles";

const Content = styled(BaseContainer)`
  padding-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;

  h3 {
    padding-bottom: 1em;

    > span {
      color: green;
    }
  }
`;

export default function Home(props) {
  return (
    <>
      <Head>
        <title>RAN COHEN | HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Content>
          <Text as="h3">
            hello, I'm Ran a <span>Developer</span> who explores the world with
            code.
          </Text>
          <Image src="/hero.svg" width="1024" height="700" />
        </Content>
      </Section>
    </>
  );
}
