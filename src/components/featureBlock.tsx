import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { FeatherIcon, Icon } from './icon';

const StyledFeatureBlock = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  color: white;
  padding: 20px;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
  margin-top: 0;
`;

const StyledTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

const StyledIcon = styled(Icon)`
  > svg {
    margin: 0 7px;
    color: white;
  }
`;

interface FeatureBlockProps {
  name: ReactNode;
  children: ReactNode;
  icon: FeatherIcon;
}
export const FeatureBlock = (props: FeatureBlockProps) => {
  const { name, children, icon } = props;

  return (
    <StyledFeatureBlock>
      <StyledIcon name={icon} size={32} />
      <div>
        <StyledTitle>{name}</StyledTitle>
        <StyledParagraph>{children}</StyledParagraph>
      </div>
    </StyledFeatureBlock>
  );
};
