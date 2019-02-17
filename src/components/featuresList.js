import React from 'react';
import styled from 'styled-components';

import {GridBlock} from '../styles/globalStyles';
import {mobileQuery} from '../styles/styleVariables';

const StyledSection = styled.section`
  background-color: #3089c9;
  color: white;
  padding: 50px 0;
  position: relative;

  h4 {
    font-size: 22px;
    color: white;
    width: 100%;
    flex-shrink: 0;
  }
  :matches(ul, li) {
    list-style: none;
  }

  ul {
    margin-top: 20px;
    flex: 1;
    font-size: 13px;
    line-height: 1.6em;
    column-count: 3;
    column-gap: 2em;
  }

  ul li {
    list-style-type: disc;
    list-style-position: inside;
  }

  @media ${mobileQuery} {
    ul {
      column-count: 1;
      font-size: 14px;
    }
  }
`;

export const FeaturesList = () => (
  <StyledSection>
    <GridBlock>
      <h4 id="features-list">Complete features list</h4>
      <ul>
        <li>Mute tweets by keywords from a specific user</li>
        <li>Mute tweets based on keywords in users' biography</li>
        <li>Mute users with default profile picture</li>
        <li>Mute users with less than a given number of followers</li>
        <li>Add GIFs from Giphy & Tenor</li>
        <li>
          {' '}
          Add emoji using
          {' '}
          <code>:shortcodes:</code>
        </li>
        <li>Mute source from tweets' menu</li>
        <li>Mute #hashtags from tweets' menu</li>
        <li>Mute tweets based on regular expressions (regex)</li>
        <li>Hide scrollbars</li>
        <li>Make scrollbars thinner</li>
        <li>Make buttons smaller in the compose panel</li>
        <li>Move the tweet's actions on the right</li>
        <li>Show the tweet's actions on hover only</li>
        <li>Make avatar rounded or squared</li>
        <li>Show the verified badge on top of avatars</li>
        <li>Revert from hearts to stars</li>
        <li>Make tweets flash when they appear in columns</li>
        <li>Quick-edit tweets</li>
        <li>Add a clear button in columns' headers</li>
        <li>Add a collapse button columns' headers</li>
        <li>Display thumbnails from more than 30 sources</li>
        <li>Avoid GIFs avatars from playing in columns</li>
        <li>Change display of usernames in columns</li>
        <li>Bring back the like/RT indicators on tweets</li>
        <li>Switch to a "minimal" theme</li>
        <li>Hide icons on top of columns</li>
        <li>Get links to all media of a tweet</li>
        <li>Download all media of a tweet</li>
        <li>Ctrl+click on like/RT to follow</li>
        <li>Share on TweetDeck from your browser's contextual menu</li>
        <li>Paste images as attachments</li>
        <li>Quickly add emojis</li>
        <li>Use your OS default font in TweetDeck</li>
        <li>Apply a custom width to columns</li>
        <li>Collapse DMs when read</li>
        <li>Prevent columns from scrolling on hover</li>
      </ul>
    </GridBlock>
  </StyledSection>
);
