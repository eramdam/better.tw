import "@fontsource/lato";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          sizes="16x16"
          type="image/png"
          href="/img/favicon-16x16.png"
        />
        <meta
          name="keywords"
          content="tweetdeck, better, chrome, opera, firefox, extension, browser, plugin, emoji, safari, edge"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
