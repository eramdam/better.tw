import React from 'react';

import DownloadButton from '../components/DownloadButton';
import TextSection from '../components/TextSection';
import FeaturesGrid from '../components/FeaturesGrid';
import FeaturesList from '../components/FeaturesList';
import homeStyles from './home.module.css';

const IndexPage = () => (
  <div>
    <TextSection
      title="Your TweetDeck, your rules!"
      paragraph={() => (
        <span>
          One of the focuses of Better TweetDeck is customization: <br /><br />
          Want to see <strong>only @usernames</strong> on tweets? No problem. <br />
          Want an <strong>absolute time format</strong> for tweets? Sure. <br />
          Missing the <strong>square avatars</strong>? We got you. <br />
          Wish TweetDeck's UI was a bit more <strong>minimal</strong>? Check this out! <br />
          Miss the old dark theme? You're in luck! <br />
          Preferred when characters were counted with <strong>actual numbers</strong>? We hear you. <br /> <br />
          All of this and a lot more is possible with Better TweetDeck!
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
          Thumbnails are a huge part of TweetDeck&apos;s experience. Better TweetDeck goes beyond the YouTube/Vine/Twitter limitation and adds support for more than 30 websites. <br /> <br />
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
    <TextSection
      title="Advanced Muting capabilities"
      paragraph={() => (
        <span>
          TweetDeck features already useful filters to mute users, hashtags and tweet sources. <br /> <br />
          Better TweetDeck goes the extra mile and lets you:
          <ul>
            <li>Mute tweets from a specific user if they contain specific keywords.</li>
            <li>Mute tweets by using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">JavaScript Regular Expressions</a>.</li>
            <li>Mute users if their biography contains a specific keyword.</li>
            <li>Mute users with the default avatar.</li>
            <li>Mute users with less than a given number of followers.</li>
          </ul>
        </span>
      )}
      image="advanced-muting.png"
      style={{
        maxHeight: 390,
      }}
    />
    <FeaturesGrid />
    <FeaturesList />
    <div className={homeStyles.downloadZone} id="download-btns">
      <div className={homeStyles.downloadZoneWrapper}>
        <div>
          <h2>Get today for your favorite browser</h2>
          <p>You're one click away from a super-charged TweetDeck experience. <br /> Get Better TweetDeck for Chrome, Firefox or Opera.</p>
        </div>
        <div className={homeStyles.downloadZoneBtns}>
          <DownloadButton className={homeStyles.downloadZoneButton} browser="chrome" />
          <DownloadButton className={homeStyles.downloadZoneButton} browser="firefox" />
          <DownloadButton className={homeStyles.downloadZoneButton} browser="opera" />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
