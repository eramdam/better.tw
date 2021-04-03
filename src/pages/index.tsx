import React from 'react';
import styled from 'styled-components';

import { DownloadButton } from '../components/downloadButton';
import { FeatureBlock } from '../components/featureBlock';
import { FeaturesList } from '../components/featuresList';
import { TemplateWrapper } from '../components/templateWrapper';
import { TextSection } from '../components/textSection';
import { GridBlock } from '../styles/globalStyles';
import { smallerThanGridQuery } from '../styles/styleVariables';

const themes = [
  [`${__PATH_PREFIX__}/img/themes/big/dark.png`, `${__PATH_PREFIX__}/img/themes/small/dark.png`],
  [`${__PATH_PREFIX__}/img/themes/big/light.png`, `${__PATH_PREFIX__}/img/themes/small/light.png`],
  [
    `${__PATH_PREFIX__}/img/themes/big/super-dark.png`,
    `${__PATH_PREFIX__}/img/themes/small/super-dark.png`,
  ],
  [
    `${__PATH_PREFIX__}/img/themes/big/old-dark.png`,
    `${__PATH_PREFIX__}/img/themes/small/old-dark.png`,
  ],
];

const StyledParagraph = styled.p``;

const StyledHeroBlock = styled(GridBlock)`
  width: 100%;
  padding-bottom: 50px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: minmax(350px, 30%) 1fr;
  grid-column-gap: 50px;

  @media ${smallerThanGridQuery} {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

const StyledHeroImage = styled.div`
  display: block;
  height: 600px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;

  > div {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 200ms linear;
  }

  > div.shown {
    opacity: 1;
  }
`;

const StyledFeaturesGrid = styled(GridBlock)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 0;
  padding: 0;

  @media ${smallerThanGridQuery} {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }

  @media (max-width: 1540px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
  }
`;

const StyledFeaturesGridWrapper = styled.div`
  background: #3ca8f7;
  padding: 20px 0;
`;

const StyledDownloadButtons = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  grid-column-gap: 20px;

  .showMobile {
    display: none;
  }

  @media (max-width: 660px) {
    > a:not(.showMobile) {
      display: none;
    }

    .showMobile {
      display: block;
    }
  }
`;

const StyledDownloadBlock = styled.div`
  padding: 40px;
  overflow: hidden;
  z-index: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    filter: blur(10px) saturate(30%);
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${themes[0][0]});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  > div {
    z-index: 1;
  }
`;

const StyledDownloadBlockText = styled.div`
  color: white;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.28);
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  grid-gap: 20px;
  justify-content: center;
  padding-bottom: 40px;

  h3 {
    margin: 0;
    text-align: center;
  }

  p {
    margin: 0;
    font-size: 14px;
    text-align: center;
  }
`;

const IndexPage = () => {
  return (
    <TemplateWrapper>
      <StyledHeroBlock>
        <div>
          <h3>Make TweetDeck your own!</h3>

          <StyledParagraph>
            Like its name implies, Better TweetDeck has everything you&apos;d want to improve your
            TweetDeck experience. <br />
            <br />
            Accent colors, alternative themes, advanced muting, and powerful customization, (almost)
            everything is possible!
          </StyledParagraph>
        </div>
        <StyledHeroImage>
          <div
            className={'shown'}
            style={{
              backgroundImage: `url(${themes[0][0]})`,
            }}></div>
        </StyledHeroImage>
      </StyledHeroBlock>
      <TextSection
        title="Your TweetDeck, your rules!"
        imageUrl={`${__PATH_PREFIX__}/img/theme-colors.png`}
        maxImageHeight={600}>
        <p>
          Better TweetDeck lets you choose between six additional accent colors and two new themes,
          that is more than a hundred possible theming combinations to make TweetDeck truly yours!
        </p>
      </TextSection>
      <TextSection
        title="Emoji & GIFs, at your fingertips"
        imageUrl={`${__PATH_PREFIX__}/img/gif-emoji.png`}
        maxImageHeight={600}>
        <p>
          Better TweetDeck lets you add emoji through an integrated picker or by using{' '}
          <code>:shortcodes:</code> 😎 🔥 👍
          <br /> <br />
          Find the perfect GIF for any occasion thanks to the Giphy/Tenor integration!
        </p>
      </TextSection>
      <TextSection
        title="Advanced Muting capabilities"
        imageUrl={`${__PATH_PREFIX__}/img/advanced-muting.png`}
        maxImageHeight={390}>
        <p>
          TweetDeck features already useful filters to mute users, hashtags and tweet sources.{' '}
          <br /> <br />
          Better TweetDeck goes the extra mile and lets you:
        </p>
        <ul>
          <li>Mute tweets from a specific user if they contain specific keywords.</li>
          <li>
            Mute tweets using{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">
              JavaScript Regular Expressions
            </a>
            .
          </li>
          <li>Mute users if their biography contains a specific keyword.</li>
          <li>Mute users with the default avatar.</li>
          <li>Mute users with less than a given number of followers.</li>
        </ul>
      </TextSection>
      <StyledFeaturesGridWrapper>
        <StyledFeaturesGrid>
          <FeatureBlock icon="at-sign" name="It was the style at the time...">
            Don&apos;t like Twitter&apos;s new reply display? Better TweetDeck got you covered!
          </FeatureBlock>
          <FeatureBlock icon="clock" name="Corridors of time">
            Whether you prefer MM/DD/YYYY or DD/MM/YYYY or something else entirely, YOU have the
            control!
          </FeatureBlock>
          <FeatureBlock icon="edit-3" name="Edit your tweets">
            It is not a real edit, but Better TweetDeck allows you to quickly re-send a fixed
            version of your tweets.
          </FeatureBlock>
          <FeatureBlock icon="mic-off" name="Advanced muting">
            Quickly mute #hashtags, specific apps or be even more specific with Regular Expressions.
          </FeatureBlock>
          <FeatureBlock name="Stay alert" icon="alert-circle">
            Don&apos;t want to miss a tweet or a DM? Better TweetDeck can highlight it in your
            browser&apos;s tab so you never miss anything.
          </FeatureBlock>
          <FeatureBlock name="Become a column expert" icon="tool">
            Add shortcuts to quickly clear, remove columns, or even collapse them to save space
            temporarily!
          </FeatureBlock>
          <FeatureBlock name="See the big picture(s)" icon="image">
            Show images in their original aspect ratio, blow them up in fullscreen, and quickly show
            link previews inside your columns.
          </FeatureBlock>
          <FeatureBlock name="You're in control" icon="sliders">
            Think TweetDeck&apos;s UI is too cluttered? Better TweetDeck gives you total control
            over things like column icons, width, scrollbars, buttons positions, and so much more!
          </FeatureBlock>
          <FeatureBlock name="Custom CSS" icon="code">
            Want to do even more? Inject custom CSS to make TweetDeck look however you want!
          </FeatureBlock>
        </StyledFeaturesGrid>
      </StyledFeaturesGridWrapper>
      <FeaturesList></FeaturesList>
      <StyledDownloadBlock>
        <StyledDownloadBlockText>
          <h3>Get today for your favorite browser</h3>
          <p>
            You&apos;re one click away from a super-charged TweetDeck experience. <br /> Get Better
            TweetDeck for Chrome, Edge, Firefox, Opera or Safari.
          </p>
        </StyledDownloadBlockText>
        <StyledDownloadButtons>
          <DownloadButton browser="chrome" />
          <DownloadButton browser="safari" />
          <DownloadButton browser="firefox" />
          <DownloadButton browser="edge" />
          <DownloadButton browser="opera" />
          <DownloadButton className="showMobile" browser="btd">
            Download now
          </DownloadButton>
        </StyledDownloadButtons>
      </StyledDownloadBlock>
    </TemplateWrapper>
  );
};

export default IndexPage;
