import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "../../services/prismicio";
import { Container, PostList } from "./styles";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>
      <Container>
        <PostList>
          {posts.map((post): any => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </PostList>
      </Container>
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ previewData }: any) => {
  const client = createClient({ previewData });

  const response = await client.getAllByType("post");

  const posts = response.map((post) => {
    return {
      slug: post.uid,
      title: post.data.title[0].text,
      excerpt:
        post.data.slices[0].items.find((el: any) => el.content[0].type === "paragraph")
          ?.content[0]?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    props: { posts },
  };
};
