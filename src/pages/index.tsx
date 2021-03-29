import classNames from 'classnames';
import React, { useState } from 'react';
import styled from 'styled-components';

import { TemplateWrapper } from '../components/templateWrapper';
import { TextSection } from '../components/textSection';
import { GridBlock } from '../styles/globalStyles';
import { customGridWidth } from '../styles/styleVariables';

const StyledParagraph = styled.p``;

const StyledHeroBlock = styled(GridBlock)`
  ${customGridWidth(1600, 30)};
  width: 100%;
  height: calc(100vh - 374px);
  margin-top: 20px;
  display: grid;
  grid-template-columns: minmax(350px, 30%) 1fr;
  grid-column-gap: 50px;
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

const StyledThemesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 172px);
  grid-template-rows: repeat(2, auto);
  grid-gap: 14px;
  justify-content: flex-start;
`;

const StyledThemeBlock = styled.div<{ className?: string }>`
  height: 0;
  padding-top: calc(60 / 120 * 100%);
  border-radius: 10px;
  background-size: 135%;
  position: relative;
  display: block;
  border: 2px solid;
  border-color: #ccd6dd;

  /* @media (prefers-color-scheme: dark) {
    border-color: black;
  } */

  &.selected {
    border-color: #1da1f2;
    box-shadow: 0 0 8px rgba(29, 161, 242, 0.6);
  }
`;

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

const IndexPage = () => {
  const [displayedTheme, setDisplayedTheme] = useState(0);

  return (
    <TemplateWrapper>
      <StyledHeroBlock>
        <div style={{}}>
          <h3>Make TweetDeck your own!</h3>

          <StyledParagraph>
            Like its name implies, Better TweetDeck has everything you&apos;d want to make your
            TweetDeck experience even better. <br />
            <br />
            Accent colors, alternative themes, advanced muting, and powerful customization, (almost)
            everything is possible!
            <br />
            <br />
            Want a quick look? Click the buttons below!
          </StyledParagraph>
          <StyledThemesWrapper>
            {themes.map((theme, index) => {
              return (
                <StyledThemeBlock
                  key={theme[0]}
                  className={classNames({
                    selected: displayedTheme === index,
                  })}
                  onClick={() => setDisplayedTheme(index)}
                  style={{
                    backgroundImage: `url(${theme[1]})`,
                  }}></StyledThemeBlock>
              );
            })}
          </StyledThemesWrapper>
        </div>
        <StyledHeroImage>
          {themes.map((theme, index) => {
            return (
              <div
                key={theme[0]}
                className={classNames({
                  shown: displayedTheme === index,
                })}
                style={{
                  backgroundImage: `url(${theme[0]})`,
                }}></div>
            );
          })}
        </StyledHeroImage>
      </StyledHeroBlock>
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
    </TemplateWrapper>
  );
};

export default IndexPage;
