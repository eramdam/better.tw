import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { GridBlock } from '../styles/globalStyles';
import { fontBody, mobileQuery } from '../styles/styleVariables';
import { Icon } from './icon';

const StyledFeatureBlock = styled.div`
  flex-basis: calc(100% / 3 - 10px);
  flex-shrink: 1;
  display: flex;
  margin-bottom: 40px;

  @media ${mobileQuery} {
    flex-basis: 100%;
  }

  .blockCopy > h5 {
    font-size: 17px;
    color: white;
  }

  .blockParagraph {
    font-size: 14px;
    color: white;
    font-family: ${fontBody};
  }
`;

const StyledIcon = styled(Icon)`
  flex-shrink: 0;
  margin-right: 14px;

  > svg {
    width: 36px;
    max-width: 36px;
    margin: 0 7px;
    color: white;
  }
`;

const FeatureBlock = ({ name, paragraph, icon }) => (
  <StyledFeatureBlock>
    <StyledIcon name={icon} />
    <div className="blockCopy">
      <h5>{name}</h5>
      <p className="blockParagraph">{paragraph}</p>
    </div>
  </StyledFeatureBlock>
);

FeatureBlock.propTypes = {
  name: PropTypes.string,
  paragraph: PropTypes.string,
  icon: PropTypes.string,
};

FeatureBlock.defaultProps = {
  name: 'Lorem ipsum',
  paragraph:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, magni assumenda delectus eos cumque quaerat sequi consectetur molestias nesciunt voluptate veritatis aliquam quos. Repellat quae non sit quod tenetur ipsam?',
  icon: 'activity',
};

const StyledFeaturesGridDiv = styled.div`
  padding: 50px 0;
  position: relative;
  background-color: #3ca8f7;

  h4 {
    font-size: 22px;
    color: white;
    width: 100%;
    flex-shrink: 0;
  }

  .blocks {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FeaturesGrid = () => (
  <StyledFeaturesGridDiv>
    <GridBlock>
      <h4>Features for years!</h4>
      <div className="blocks">
        <FeatureBlock
          name="Quick sharing"
          icon="share"
          paragraph="Share a link or a piece of text on TweetDeck in a single right-click! No copy/pasting, only more sharing!"
        />
        <FeatureBlock
          name="I miss the old replies..."
          icon="at-sign"
          paragraph="Don't like Twitter's new reply display? Better TweetDeck got you covered!"
        />
        <FeatureBlock
          name="Control (the display of) time"
          icon="clock"
          paragraph="Whether you're more MM/DD/YYYY or DD/MM/YYYY or something else entirely, YOU have the control!"
        />
        <FeatureBlock
          name="Edit your tweets"
          icon="edit-3"
          paragraph="That's not a real edit, but Better TweetDeck allows you to quickly re-send a fixed version of your tweets."
        />
        <FeatureBlock
          name="Advanced muting"
          icon="mic-off"
          paragraph="Quickly mute #hashtags, specific apps or be even more specific with Regular Expressions."
        />
        <FeatureBlock
          name="Skip t.co redirections"
          icon="external-link"
          paragraph="Want to reduce tracking and/or on a slow connection? Automatically expand links in tweets."
        />
        <FeatureBlock
          name="Stay alert"
          icon="alert-circle"
          paragraph="Don't want to miss a tweet or a DM? Better TweetDeck can highlight it in your browser's tab so you never miss anything."
        />
        <FeatureBlock
          name="Download GIFs/videos"
          icon="download"
          paragraph="Ever wanted to get a nice GIF or video from a Twitter account? Now it's one click away!"
        />
        <FeatureBlock
          name="No peeking!"
          icon="eye-off"
          paragraph="Want to avoid people peeking over your DMs? Collapse your read conversations for a little bit of privacy."
        />
      </div>
    </GridBlock>
  </StyledFeaturesGridDiv>
);
