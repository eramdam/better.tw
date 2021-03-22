import gifshot from 'gifshot';
import qs from 'query-string';
import React from 'react';

import { TemplateWrapper } from '../components/templateWrapper';

const msgToParent = msg =>
  window.parent && window.parent.postMessage(msg, 'https://tweetdeck.twitter.com/');

class GifPage extends React.Component {
  componentDidMount() {
    const neededKeys = [
      'gifHeight',
      'gifWidth',
      'interval',
      'name',
      'numFrames',
      'sampleInterval',
      'video',
    ];

    const parsed = qs.parse(window.location.search);
    const hasAllKeys = neededKeys.every(k => parsed[k]);

    // If we don't have all the right keys or we're not in an iframe, we stop everything
    if (!hasAllKeys) {
      return;
    }

    gifshot.createGIF(
      {
        ...parsed,
        progressCallback: progress => {
          if (window.parent) {
            // Report progress to the parent (Better TweetDeck)
            msgToParent({
              message: 'progress_gif',
              progress,
              name: parsed.name,
            });
          }
        },
      },
      obj => {
        // Pass final image to BTD
        msgToParent({
          message: 'complete_gif',
          img: obj.image,
          name: parsed.name,
        });
      }
    );
  }

  render() {
    return (
      <TemplateWrapper>
        <div
          style={{
            padding: 40,
            margin: '0 auto',
            textAlign: 'center',
          }}>
          👀
        </div>
      </TemplateWrapper>
    );
  }
}

export default GifPage;
