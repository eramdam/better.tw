import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { GridBlock } from '../styles/globalStyles';
import { smallerThanGridQuery } from '../styles/styleVariables';

const StyledWrapper = styled.div`
  background: white;
  padding: 40px 0;

  &:nth-of-type(even) {
    background: #f8f8f8;
  }
`;

const StyledBlock = styled(GridBlock)`
  display: grid;
  grid-template-areas: 'text image';
  grid-template-columns: 1fr;
  grid-column-gap: 30px;

  ${StyledWrapper}:nth-of-type(odd) & {
    grid-template-areas: 'image text';
  }

  @media ${smallerThanGridQuery} {
    grid-row-gap: 30px;
    grid-template-areas:
      'text'
      'image' !important;
    justify-content: center;
  }
`;

const StyledImageBlock = styled.div`
  grid-area: image;

  img {
    max-height: 390px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  @media ${smallerThanGridQuery} {
    text-align: center;
    img {
      max-width: 100%;
      max-height: none !important;
    }
  }
`;

interface TextSectionPropsBase {
  title: ReactNode;
  children: ReactNode;
}

interface TextSectionWithImage extends TextSectionPropsBase {
  maxImageHeight?: number;
  imageUrl?: string;
}

interface TextSectionWithCustomImage extends TextSectionPropsBase {
  image?: ReactNode;
}

type TextSectionProps = TextSectionWithImage | TextSectionWithCustomImage;

export const TextSection = (props: TextSectionProps) => {
  const renderImagePart = () => {
    if ('image' in props) {
      return props.image;
    }

    if ('imageUrl' in props) {
      return (
        <img
          src={props.imageUrl}
          alt=""
          style={{
            maxHeight: props.maxImageHeight,
          }}
        />
      );
    }

    return null;
  };

  return (
    <StyledWrapper>
      <StyledBlock>
        <div
          style={{
            gridArea: 'text',
          }}>
          <h3>{props.title}</h3>
          {props.children}
        </div>
        <StyledImageBlock>{renderImagePart()}</StyledImageBlock>
      </StyledBlock>
    </StyledWrapper>
  );
};
