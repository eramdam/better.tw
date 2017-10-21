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
      title="The TweetDeck you know and 💙, even better!"
      paragraph="Better TweetDeck aims at improving your experience on TweetDeck by providing useful features and much-needed customization options."
      image="test-img.png"
    />
    <TextSection
      title="The TweetDeck you know and 💙, even better!"
      paragraph="Better TweetDeck aims at improving your experience on TweetDeck by providing useful features and much-needed customization options."
      image="test-img.png"
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
