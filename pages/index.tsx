import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Better TweetDeck</title>
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
    </div>
  );
};

export default Home;
