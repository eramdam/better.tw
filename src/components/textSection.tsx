import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { GridBlock } from '../styles/globalStyles';
import { customGridWidth } from '../styles/styleVariables';

const StyledWrapper = styled.div`
  background: #f8f8f8;
  padding: 40px 0;
`;

const StyledBlock = styled(GridBlock)`
  ${customGridWidth(1600, 30)};
  display: grid;
  grid-template-areas: 'text image';
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
`;

const StyledImageBlock = styled.div`
  grid-area: image;

  img {
    max-height: 390px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

interface TextSectionProps {
  title: ReactNode;
  children: ReactNode;
  maxImageHeight?: number;
  imageUrl: string;
}

export const TextSection = (props: TextSectionProps) => {
  return (
    <StyledWrapper>
      <StyledBlock>
        <div
          style={{
            gridArea: 'text',
          }}>
          <h4>{props.title}</h4>
          {props.children}
        </div>
        <StyledImageBlock>
          <img
            src={props.imageUrl}
            alt=""
            style={{
              maxHeight: props.maxImageHeight,
            }}
          />
        </StyledImageBlock>
      </StyledBlock>
    </StyledWrapper>
  );
};
