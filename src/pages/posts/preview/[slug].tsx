import { SliceLike, SliceZone, SliceZoneLike } from "@prismicio/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { createClient } from "../../../services/prismicio";
import { components } from "../../../../slices";
import Head from "next/head";
import { Container, Content, ContinueReading } from "../postStyle";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { POST_REFRESH_TIME } from "../../../constants/constants";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: SliceZoneLike<SliceLike<string>> | undefined;
    updatedAt: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session]);
  return (
    <>
      <Head>
        <title>{post.title} | ignews</title>
      </Head>
      <Container>
        <Content>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <SliceZone
            slices={post.content}
            components={components}
            context={{ preview: true }}
          />
          <ContinueReading>
            Wanna continue reading?
            <Link href="/">
              <a href>Subscribe now</a>
            </Link>
          </ContinueReading>
        </Content>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const client = createClient();

  const response = await client.getByUID("post", String(slug), {});

  const post = {
    slug,
    title: response.data.title[0].text,
    content: response.data.slices,
    //.splice(0,3)
    updatedAt: new Date(response.last_publication_date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  return {
    props: { post },
    redirect: POST_REFRESH_TIME,
  };
};
