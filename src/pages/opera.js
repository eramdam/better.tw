import React from 'react';
import styled from 'styled-components';

import { TemplateWrapper } from '../components/templateWrapper';
import { GridBlock } from '../styles/globalStyles';

const StyledTitle = styled.h2`
  font-size: 22px;
`;

const StyledBlock = styled(GridBlock)`
  a {
    color: #00cbfc;
    color: #00a0fb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledP = styled.p`
  margin: 1em 0;
  width: 100%;
`;

const StyledList = styled.ol`
  li {
    margin-top: 0.4em;
  }
`;

const OperaPage = () => (
  <TemplateWrapper showDownloads={false}>
    <StyledBlock>
      <StyledTitle>Installing Better TweetDeck on Opera</StyledTitle>
      <StyledP>
        Better TweetDeck is available on
        {' '}
        <a href="https://addons.opera.com/">Opera Add-ons</a>
        {' '}
but
        apparently, the Opera add-ons team refuses to have people review new builds anymore, so the
        current version is, very outdated.
        {' '}
        <br />
        <br />
        To fix that, you'll have to use a workaround to use Better TweetDeck on Opera. It's not
        ideal, I don't like it, but at least you'll get updates like everybody else on Chrome and
        Firefox!
      </StyledP>
      <StyledP>
        Follow those steps and you should be fine:
        {' '}
        <br />
      </StyledP>
      <StyledList>
        <li>
          Install the
          {' '}
          <a href="https://addons.opera.com/en/extensions/details/download-chrome-extension-9/?display=en">
            "Install Chrome Extensions"
          </a>
          {' '}
          add-on.
        </li>
        <li>
          Go find
          {' '}
          <a href="https://better.tw/chrome">Better TweetDeck on the Chrome Web Store</a>
.
        </li>
        <li>Install Better TweetDeck by clicking "Add to Chrome"</li>
        <li>Confirm the installation when Opera asks you to</li>
        <li>You're done! Enjoy!</li>
      </StyledList>
      <StyledP>
        Feel free to reach out on Twitter
        {' '}
        <a href="https://twitter.com/BetterTDeck">@BetterTDeck</a>
        {' '}
        if you're running into any issues.
      </StyledP>
    </StyledBlock>
  </TemplateWrapper>
);

export default OperaPage;
