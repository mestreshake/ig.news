import type { NextPage } from "next";
import Head from "next/head";
import { GlobalStyle } from "../styles/global";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <GlobalStyle />
      <h1>hello next</h1>
    </>
  );
};

export default Home;
