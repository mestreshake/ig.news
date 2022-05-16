import { SliceLike, SliceZone, SliceZoneLike } from "@prismicio/react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { createClient } from "../../services/prismicio";
import { components } from "../../../slices";
import Head from "next/head";
import { Container, Content } from "./postStyle";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: SliceZoneLike<SliceLike<string>> | undefined;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | ignews</title>
      </Head>
      <Container>
        <Content>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <SliceZone slices={post.content} components={components} />
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
  const session = await getSession({ req });

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { slug } = params;
  const client = createClient({ req });

  const response = await client.getByUID("post", String(slug), {});

  const post = {
    slug,
    title: response.data.title[0].text,
    content: response.data.slices,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  return {
    props: { post },
  };
};
