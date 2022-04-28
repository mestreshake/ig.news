import Head from "next/head";
import { Container, PostList } from "./styles";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>
      <Container>
        <PostList>
          <a>
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>legenda legenda legenda legenda legenda legenda legenda legenda </p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>legenda legenda legenda legenda legenda legenda legenda legenda </p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>legenda legenda legenda legenda legenda legenda legenda legenda </p>
          </a>
        </PostList>
      </Container>
    </>
  );
}
