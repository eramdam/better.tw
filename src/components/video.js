import cx from 'classnames';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Icon } from './icon';

const StyledVideoWrapperDiv = styled.div`
  position: relative;
  font-size: 0;

  &:focus {
    outline: 0;
  }

  .videoOverlay {
    background: ${rgba('black', 0.5)};
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: all 300ms ease;
    z-index: 1;

    color: ${rgba('white', 0.4)};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .videoOverlay:hover {
    color: ${rgba('white', 0.8)};
  }

  .videoWrapper.playing .videoOverlay {
    opacity: 0;
  }
`;

export class Video extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    poster: PropTypes.string,
  };

  static defaultProps = {
    src: '',
    className: '',
    wrapperClassName: '',
    poster: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      videoPaused: true,
    };
  }

  playPause = () => {
    const video = this.videoNode;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    this.setState({
      videoPaused: video.paused,
    });
  };

  render() {
    const {
      src, className, poster, wrapperClassName, ...more
    } = this.props;

    return (
      <StyledVideoWrapperDiv
        className={cx(wrapperClassName, {
          playing: !this.state.videoPaused,
        })}
        style={{
          cursor: 'pointer',
        }}
        onClick={this.playPause}
        onKeyDown={this.playPause}
        role="button"
        tabIndex="0"
      >
        <span className="videoOverlay">
          <Icon name="play-circle" size={80} />
        </span>
        <video
          src={src}
          ref={(el) => {
            this.videoNode = el;
          }}
          className={className}
          poster={poster}
          muted
          playsInline
          {...more}
        />
      </StyledVideoWrapperDiv>
    );
  }
}
