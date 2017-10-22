import React from 'react';
// import Link from 'gatsby-link';

import Header from '../components/Header';
import DownloadButton from '../components/DownloadButton';
import TextSection from '../components/TextSection';
import FeaturesGrid from '../components/FeaturesGrid';
import FeaturesList from '../components/FeaturesList';
import Footer from '../components/Footer';
import homeStyles from './home.module.css';

const IndexPage = () => (
  <div>
    <Header />
    <nav className={homeStyles.downloadBtns}>
      <DownloadButton className={homeStyles.downloadButton} browser="opera" />
      <DownloadButton className={homeStyles.downloadButton} browser="chrome" />
      <DownloadButton className={homeStyles.downloadButton} browser="firefox" />
    </nav>
    <TextSection
      title="Your TweetDeck, your rules!"
      paragraph={() => (
        <span>
          One of the focus of Better TweetDeck is customization. <br />
          Want to see only @usernames? No problem. <br />
          Want a specific time format for tweets? Sure. <br />
          Want to go back to square avatars? We got you. <br /> <br />
          All of this and a lot more is possible with Better TweetDeck!
        </span>
      )}
      image="custo2.png"
      style={{
        maxHeight: 350,
      }}
    />
    <TextSection
      title="Do you speak emoji? 👀"
      paragraph={() => (
        <span>
          Better TweetDeck features an emoji picker so you can unleash the emoji 🔥  in no time ⚡ <br />
          All your fave emoji are here 😍 <br /> <br />
          You can also make emoji pop out even more in tweets by making them bigger 💪
        </span>
      )}
      image="emojos.png"
      style={{
        maxHeight: 300,
      }}
    />
    <FeaturesGrid />
    <FeaturesList />
    <div className={homeStyles.downloadZone}>
      <div className={homeStyles.downloadZoneWrapper}>
        <div>
          <h2>Get today for your favorite browser</h2>
          <p>You're one click away from a super-charged TweetDeck experience. <br/> Get Better TweetDeck for Opera, Chrome or Firefox.</p>
        </div>
        <div>
          <DownloadButton className={homeStyles.downloadButton} browser="opera" />
          <DownloadButton className={homeStyles.downloadButton} browser="chrome" />
          <DownloadButton className={homeStyles.downloadButton} browser="firefox" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default IndexPage;
