import cx from 'classnames';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
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

  &.playing .videoOverlay {
    opacity: 0;
  }
`;

interface VideoProps {
  src: string;
  className: string;
  wrapperClassName: string;
  poster: string;
}

export class Video extends React.Component<
  VideoProps,
  {
    videoPaused: boolean;
  }
> {
  static propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    poster: PropTypes.string,
  };

  private videoNode = createRef<HTMLVideoElement>();

  static defaultProps = {
    src: '',
    className: '',
    wrapperClassName: '',
    poster: '',
  };

  constructor(props: VideoProps) {
    super(props);

    this.state = {
      videoPaused: true,
    };
  }

  playPause = () => {
    const video = this.videoNode.current;

    if (!video) {
      return;
    }

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
    const { src, className, poster, wrapperClassName, ...more } = this.props;

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
        tabIndex={0}>
        <span className="videoOverlay">
          <Icon name="play-circle" size={80} />
        </span>
        <video
          src={src}
          ref={this.videoNode}
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
