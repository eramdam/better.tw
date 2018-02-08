
import React from 'react';
import gifshot from 'gifshot';
import FileSaver from 'file-saver';
import qs from 'query-string';

const dataURItoBlob = (dataURI) => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  const ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  const blob = new Blob([ab], { type: mimeString });
  return blob;
};

const msgToParent = msg => window.parent.postMessage(msg, 'https://tweetdeck.twitter.com/');

class IndexPage extends React.Component {
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

    if (!hasAllKeys || window.top === window.self) {
      console.log('stop');
      return;
    }

    gifshot.createGIF({
      ...parsed,
      progressCallback: (progress) => {
        if (window.parent) {
          msgToParent({ message: 'progress_gif', progress });
        }
      },
    }, (obj) => {
      msgToParent({ message: 'complete_gif' });
      const blob = dataURItoBlob(obj.image);
      FileSaver.saveAs(blob, parsed.name);
    });
  }

  render() {
    return (
      <div
        style={{
          padding: 40,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        👀
      </div>
    );
  }
}

export default IndexPage;
