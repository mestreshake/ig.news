import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import avatarImg from "../../public/images/avatar.svg";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number | null;
  };
}

const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.section`
  max-width: 600px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    span {
      color: var(--cyan-500);
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;

    span {
      color: var(--cyan-500);
      font-weight: bold;
    }
  }

  button {
    margin-top: 2.5rem;
  }
`;

const Home = ({ product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Content>
          <span>Hey, welcome</span>
          <h1>
            News about the <span>React </span>world.
          </h1>
          <p>
            Get access to all the publications
            <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </Content>
        <Image src={avatarImg} alt="Girl coding" />
      </Container>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1JArlxGzu6rLR2T9EnPjGyQP", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price.unit_amount / 100)
      : null,
  };

  return { props: { product } };
};
