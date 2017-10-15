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
      <DownloadButton className={homeStyles.button} browser="opera" />
      <DownloadButton className={homeStyles.button} browser="chrome" />
      <DownloadButton className={homeStyles.button} browser="firefox" />
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
    <Footer />
  </div>
);

export default IndexPage;
