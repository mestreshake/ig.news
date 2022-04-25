import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </>
  );
}

export default MyApp;
