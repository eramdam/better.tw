import { isFunction } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { GridBlock } from '../styles/globalStyles';
import { fontBody, smallerThanGridQuery } from '../styles/styleVariables';
import { Video } from './video';

const imgPath = url => `${__PATH_PREFIX__}/img/${url}`;
const renderTextProp = prop => (isFunction(prop) ? prop() : prop);

const StyledTextSection = styled.section`
  width: 100%;
  background: white;
  position: relative;
  padding: 32px 0;

  &:nth-of-type(even) {
    background: #f8f8f8;
  }

  &:nth-of-type(even) .sectionCopy {
    margin-right: 0;
    margin-left: 60px;
    order: 2;
  }

  &:nth-of-type(even) .sectionImage {
    order: 1;
  }

  .textSectionGrid.vertical {
    flex-direction: column;
  }

  .textSection > div {
    justify-content: space-around;
  }

  .sectionCopy {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 60px;
  }

  .textSectionGrid.vertical .sectionCopy {
    margin-right: 0;
    margin-bottom: 30px;
  }

  .sectionCopy > h4 {
    font-size: 19px;
  }

  .sectionCopy > h4 + p {
    margin: 1em 0;
  }

  .sectionCopy a {
    color: #3593e6;
  }

  .sectionCopy a:hover {
    color: #20588a;
  }

  .sectionParagraph {
    font-size: 16px;
    font-family: ${fontBody};
  }

  .sectionVideoWrapper {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.52), 0 5px 15px 0 rgba(0, 0, 0, 0.27);
    background: black;
  }

  .sectionVideo {
    background: black;
    max-width: 100%;
  }

  .sectionImage {
    /* float: right; */
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.52), 0 5px 15px 0 rgba(0, 0, 0, 0.27);
    border-radius: 4px;
    height: auto;
    max-width: 100%;
    background: black;
  }

  @media ${smallerThanGridQuery} {
    padding: 20px;

    .sectionCopy {
      order: 1;
      margin-left: 0;
      margin-right: 0;
    }

    .sectionImage,
    .sectionVideoWrapper {
      order: 2;
    }

    .sectionVideo,
    .sectionImage {
      width: 100%;
      max-height: none !important;
    }
  }
`;

export const TextSection = ({
  title,
  paragraph,
  image,
  video,
  vertical,
  ...more
}) => (
  <StyledTextSection>
    <GridBlock className={vertical}>
      <div className="sectionCopy">
        <h4>{title}</h4>
        <p className="sectionParagraph">{renderTextProp(paragraph)}</p>
      </div>
      {video ? (
        <Video
          src={imgPath(video)}
          className="sectionVideo"
          wrapperClassName="sectionVideoWrapper"
          poster={imgPath(image)}
          {...more}
        />
      ) : (
        <img className="sectionImage" src={imgPath(image)} alt="" {...more} />
      )}
    </GridBlock>
  </StyledTextSection>
);

TextSection.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  paragraph: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  image: PropTypes.string,
  video: PropTypes.string,
  vertical: PropTypes.bool,
};

TextSection.defaultProps = {
  title: 'Lorem Ipsum',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sit repellat placeat, est delectus nemo labore expedita possimus minus impedit molestias illo officiis voluptate maiores quaerat, inventore aut ipsam ducimus!',
  image: 'test-img.png',
  video: undefined,
  vertical: false,
};
