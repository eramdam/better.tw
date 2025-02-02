import Head from "next/head";
import Script from "next/script";
import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = (
  props: PropsWithChildren<{
    title?: string;
  }>
) => {
  return (
    <>
      <Head>
        <title>{props.title || "Better TweetDeck"}</title>
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
      <Script
        defer
        data-domain="better.tw"
        src="https://plausible.erambert.me/js/script.js"
      ></Script>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
};
