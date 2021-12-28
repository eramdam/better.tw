import type { NextPage } from "next";
import Head from "next/head";
import { DownloadButton } from "../components/downloadButton";
import { FeatureBlock } from "../components/featureBlock";
import { TextSection } from "../components/textSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Better TweetDeck, take TweetDeck to the next level</title>
      </Head>
      <div className="w-full py-12 mt-5 grid grid-cols-[minmax(350px,30%)_1fr] gap-x-12 max-w-6xl my-0 mx-auto">
        <div>
          <h2>Make TweetDeck your own!</h2>

          <p>
            Like its name implies, Better TweetDeck has everything you&apos;d
            want to improve your TweetDeck experience. <br />
            <br />
            Accent colors, alternative themes, advanced muting, and powerful
            customization, (almost) everything is possible!
          </p>
        </div>
        <div className="h-[600px] relative w-full rounded-xl drop-shadow-heroImages overflow-hidden">
          <div className="bg-hero-b-dark absolute top-0 h-full w-full"></div>
        </div>
      </div>
      <TextSection
        title="Your TweetDeck, your rules!"
        imageUrl={`/img/theme-colors.png`}
        maxImageHeight={600}
      >
        <p>
          Better TweetDeck lets you choose between six additional accent colors
          and two new themes, that is more than a hundred possible theming
          combinations to make TweetDeck truly yours!
        </p>
      </TextSection>
      <TextSection
        title="Emoji & GIFs, at your fingertips"
        imageUrl={`/img/gif-emoji.png`}
        maxImageHeight={600}
      >
        <p>
          Better TweetDeck lets you add emoji through an integrated picker or by
          using <code>:shortcodes:</code> 😎 🔥 👍
          <br /> <br />
          Find the perfect GIF for any occasion thanks to the Giphy/Tenor
          integration!
        </p>
      </TextSection>
      <TextSection
        title="Advanced Muting capabilities"
        imageUrl={`/img/advanced-muting.png`}
        maxImageHeight={390}
      >
        <p>
          TweetDeck features already useful filters to mute users, hashtags and
          tweet sources. <br /> <br />
          Better TweetDeck goes the extra mile and lets you:
        </p>
        <ul>
          <li>
            Mute tweets from a specific user if they contain specific keywords.
          </li>
          <li>
            Mute tweets using{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">
              JavaScript Regular Expressions
            </a>
            .
          </li>
          <li>Mute users if their biography contains a specific keyword.</li>
          <li>Mute users with the default avatar.</li>
          <li>Mute users with less than a given number of followers.</li>
          <li>And a lot more</li>
        </ul>
      </TextSection>
      <div className="py-5 bg-sky-500 text-white">
        <div className="grid auto-rows-auto grid-cols-3 max-w-6xl mx-auto">
          <FeatureBlock icon="at-sign" name="It was the style at the time...">
            Don&apos;t like Twitter&apos;s new reply display? Better TweetDeck
            got you covered!
          </FeatureBlock>
          <FeatureBlock icon="clock" name="Corridors of time">
            Whether you prefer MM/DD/YYYY or DD/MM/YYYY or something else
            entirely, YOU have the control!
          </FeatureBlock>
          <FeatureBlock icon="edit-3" name="Edit your tweets">
            It is not a real edit, but Better TweetDeck allows you to quickly
            re-send a fixed version of your tweets.
          </FeatureBlock>
          <FeatureBlock icon="mic-off" name="Advanced muting">
            Quickly mute #hashtags, specific apps or be even more specific with
            Regular Expressions.
          </FeatureBlock>
          <FeatureBlock name="Stay alert" icon="alert-circle">
            Don&apos;t want to miss a tweet or a DM? Better TweetDeck can
            highlight it in your browser&apos;s tab so you never miss anything.
          </FeatureBlock>
          <FeatureBlock name="Become a column expert" icon="tool">
            Add shortcuts to quickly clear, remove columns, or even collapse
            them to save space temporarily!
          </FeatureBlock>
          <FeatureBlock name="See the big picture(s)" icon="image">
            Show images in their original aspect ratio, blow them up in
            fullscreen, and quickly show link previews inside your columns.
          </FeatureBlock>
          <FeatureBlock name="You're in control" icon="sliders">
            Think TweetDeck&apos;s UI is too cluttered? Better TweetDeck gives
            you total control over things like column icons, width, scrollbars,
            buttons positions, and so much more!
          </FeatureBlock>
          <FeatureBlock name="Custom CSS" icon="code">
            Want to do even more? Inject custom CSS to make TweetDeck look
            however you want!
          </FeatureBlock>
        </div>
      </div>
      <div className="py-5 bg-sky-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 id="features-list">Complete list of features</h2>
          <ul className="columns-3 text-sm leading-6 gap-x-[2em]">
            <li>
              Add emoji using <code>:shortcodes:</code>
            </li>
            <li>
              Two additional dark themes, &quot;Super Dark&quot; (OLED friendly)
              and &quot;Old Gray&quot;
            </li>
            <li>Add a clear button in columns&apos; headers</li>
            <li>Add a collapse button in columns&apos; headers</li>
            <li>Add a delete button in columns&apos; headers</li>
            <li>Add GIFs from Giphy & Tenor</li>
            <li>Apply a custom width to columns</li>
            <li>
              Automatically switch between light and dark theme according to
              your OS settings
            </li>
            <li>Avoid GIFs avatars from playing in columns</li>
            <li>Change display of usernames in columns</li>
            <li>Change the accent color of TweetDeck</li>
            <li>Collapse DMs when read</li>
            <li>Ctrl+click on like/RT to follow</li>
            <li>Download all media of a tweet</li>
            <li>Display Twitter &quot;cards&quot; inside of columns</li>
            <li>Get links to all media of a tweet</li>
            <li>Hide icons on top of columns</li>
            <li>Hide scrollbars</li>
            <li>Make avatar rounded or squared</li>
            <li>Make buttons smaller in the compose panel</li>
            <li>Make scrollbars thinner</li>
            <li>Move the tweet&apos;s actions on the right</li>
            <li>Mute #hashtags from tweets&apos; menu</li>
            <li>Mute source from tweets&apos; menu</li>
            <li>Mute tweets based on keywords in users&apos; biography</li>
            <li>Mute tweets based on regular expressions (regex)</li>
            <li>Mute tweets by keywords from a specific user</li>
            <li>Mute users with default profile picture</li>
            <li>Mute users with less than a given number of followers</li>
            <li>Paste images as attachments</li>
            <li>Prevent columns from scrolling on hover</li>
            <li>Quick-edit tweets</li>
            <li>Quickly add emojis</li>
            <li>Revert from hearts to stars</li>
            <li>Share on TweetDeck from your browser&apos;s contextual menu</li>
            <li>
              Show &quot;like from accounts&quot; dialog when liking a tweet
            </li>
            <li>Show fullscreen images like on Twitter Web</li>
            <li>Show the tweet&apos;s actions on hover only</li>
            <li>Show the verified badge on top of avatars</li>
            <li>Switch to a &quot;minimal&quot; theme</li>
          </ul>
        </div>
      </div>
      <div className="py-10 overflow-hidden z-0 relative after:bg-blur-hero after:-z-10 after:absolute after:inset-[-30px] after:filter after:blur-[20px] after:saturate-50 after:bg-center after:bg-cover">
        <div
          className="z-10 text-white grid grid-flow-row auto-rows-auto gap-5 justify-center pb-10"
          style={{
            textShadow: "0 2px 2px rgba(0, 0, 0, 0.28)",
          }}
        >
          <h2 className="text-center">Get today for your favorite browser</h2>
          <p className="text-sm font-semibold">
            You&apos;re one click away from a super-charged TweetDeck
            experience. <br /> Get Better TweetDeck for Chrome, Edge, Firefox,
            Opera or Safari.
          </p>
        </div>
        <div className="grid justify-center grid-flow-col auto-cols-auto gap-5">
          <DownloadButton browser="chrome" />
          <DownloadButton browser="safari" />
          <DownloadButton browser="firefox" />
          <DownloadButton browser="edge" />
          <DownloadButton browser="opera" />
          <DownloadButton showMobile browser="btd">
            Download now
          </DownloadButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
