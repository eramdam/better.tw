import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './index.module.css';

const cx = classnames.bind(styles);

export default class Video extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    poster: PropTypes.string,
  }

  static defaultProps = {
    src: '',
    className: '',
    wrapperClassName: '',
    poster: '',
  }

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
  }

  render() {
    const {
      src, className, poster, wrapperClassName, ...more
    } = this.props;

    return (
      <div
        className={cx('videoWrapper', wrapperClassName, {
          playing: !this.state.videoPaused,
        })}
        style={{
          cursor: 'pointer',
        }}
        onClick={this.playPause}
      >
        <span className={styles.videoOverlay} />
        <video
          src={src}
          ref={(el) => { this.videoNode = el; }}
          className={className}
          poster={poster}
          muted
          preload
          {...more}
        />
      </div>
    );
  }
}
