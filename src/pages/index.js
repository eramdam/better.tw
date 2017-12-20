import React from 'react';
// import Link from 'gatsby-link';

import DownloadButton from '../components/DownloadButton';
import TextSection from '../components/TextSection';
import FeaturesGrid from '../components/FeaturesGrid';
import FeaturesList from '../components/FeaturesList';
import homeStyles from './home.module.css';

const IndexPage = () => (
  <div>
    <nav className={homeStyles.downloadBtns}>
      <DownloadButton className={homeStyles.downloadButton} browser="opera" />
      <DownloadButton className={homeStyles.downloadButton} browser="chrome" />
      <DownloadButton className={homeStyles.downloadButton} browser="firefox" />
      <DownloadButton className={`${homeStyles.downloadButton} ${homeStyles.showMobile}`} browser="btd" text="Download now" />
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
      title="Emoji & GIFs, at your fingertips"
      paragraph={() => (
        <span>
          Better TweetDeck lets you add emoji through an integrated picker or by using <code>:shortcodes:</code> 😎 🔥 👍 <br /> <br />
          Find the perfect GIF for any occasion thanks to the Giphy/Tenor integration!
        </span>
      )}
      image="poster-emoji.jpg"
      video="emojos-gifs.mp4"
      style={{
        maxHeight: 500,
      }}
    />
    <FeaturesGrid />
    <FeaturesList />
    <div className={homeStyles.downloadZone} id="download-btns">
      <div className={homeStyles.downloadZoneWrapper}>
        <div>
          <h2>Get today for your favorite browser</h2>
          <p>You're one click away from a super-charged TweetDeck experience. <br /> Get Better TweetDeck for Opera, Chrome or Firefox.</p>
        </div>
        <div className={homeStyles.downloadZoneBtns}>
          <DownloadButton className={homeStyles.downloadZoneButton} browser="opera" />
          <DownloadButton className={homeStyles.downloadZoneButton} browser="chrome" />
          <DownloadButton className={homeStyles.downloadZoneButton} browser="firefox" />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
