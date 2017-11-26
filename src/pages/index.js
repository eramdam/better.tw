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
          One of the focus of Better TweetDeck is customization: <br /><br />
          Want to see <strong>only @usernames</strong> on tweets? No problem. <br />
          Want an <strong>absolute time format</strong> for tweets? Sure. <br />
          Missing the <strong>square avatars</strong>? We got you. <br />
          Wish TweetDeck's UI was a bit more <strong>minimal</strong>? Check this out! <br />
          Preferred when characters counted with <strong>actual numbers</strong>? We hear you. <br /> <br />
          All of this and a <a href="#features-list">lot more</a> is possible with Better TweetDeck!
        </span>
      )}
      vertical
      image="before-after.png"
      style={{
        maxHeight: 450,
      }}
    />
    <TextSection
      title="Now you're playing with power!"
      paragraph={() => (
        <span>
          Better TweetDeck gives you access to powerful advanced features. <br /> <br />
          Quickly fix your typos with the <strong>edit feature</strong>. <br />
          Easily <strong>paste images</strong> to tweet them. <br />
          <strong>Share any link</strong> on TweetDeck with a single click. <br />
          Make your life easier with <strong>GIF preview and download</strong>.
        </span>
      )}
      image="poster.jpg"
      video="better-tweetdeck-power.mp4"
      style={{
        maxHeight: 580,
      }}
    />
    <TextSection
      title="See the big picture(s)"
      paragraph={() => (
        <span>
          Thumbnails are a huge part of TweetDeck&apos;s experience. Better TweetDeck goes beyond the YouTube/Vine/Twitter limitation and adds the support of more than 30 websites. <br /> <br />
          Ever wanted to preview content from Instagram, Vimeo, SoundCloud, Bandcamp, Spotify, Twitch or Imgur? Say no more!
        </span>
      )}
      image="big-pictures.png"
      style={{
        maxHeight: 300,
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
        maxHeight: 350,
      }}
    />
    <FeaturesGrid />
    <FeaturesList />
    <div className={homeStyles.downloadZone}>
      <div className={homeStyles.downloadZoneWrapper}>
        <div>
          <h2>Get today for your favorite browser</h2>
          <p>You're one click away from a super-charged TweetDeck experience. <br /> Get Better TweetDeck for Opera, Chrome or Firefox.</p>
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
