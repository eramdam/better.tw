import React from 'react';
import styled from 'styled-components';

import { GridBlock } from '../styles/globalStyles';
import { mobileQuery } from '../styles/styleVariables';

const StyledSection = styled.section`
  background-color: #3089c9;
  color: white;
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
      <h4 id="features-list">Complete list of features</h4>
      <ul>
        <li>
          {' '}
          Add emoji using <code>:shortcodes:</code>
        </li>
        <li>
          {' '}
          Two additional dark themes, &quot;Super Dark&quot; (OLED friendly) and &quot;Old
          Gray&quot;
        </li>
        <li>Add a clear button in columns&apos; headers</li>
        <li>Add a collapse button in columns&apos; headers</li>
        <li>Add a delete button in columns&apos; headers</li>
        <li>Add GIFs from Giphy & Tenor</li>
        <li>Apply a custom width to columns</li>
        <li>Automatically switch between light and dark theme according to your OS settings</li>
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
        <li>Show &quot;like from accounts&quot; dialog when liking a tweet</li>
        <li>Show fullscreen images like on Twitter Web</li>
        <li>Show the tweet&apos;s actions on hover only</li>
        <li>Show the verified badge on top of avatars</li>
        <li>Switch to a &quot;minimal&quot; theme</li>
      </ul>
    </GridBlock>
  </StyledSection>
);
