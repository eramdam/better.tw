import { graphql } from 'gatsby';
import React from 'react';

import { PageTemplateQuery } from '../../graphql-types';
import { GridBlock } from '../styles/globalStyles';
import { TemplateWrapper } from './templateWrapper';

const PageTemplate = (props: { data: PageTemplateQuery }) => {
  const { data } = props;
  const { markdownRemark } = data;
  const html = markdownRemark?.html || '';
  const frontmatter = markdownRemark?.frontmatter;

  return (
    <TemplateWrapper title={frontmatter?.title || ''}>
      <GridBlock
        style={{
          background: 'white',
        }}>
        <h1>{frontmatter?.title}</h1>

        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </GridBlock>
    </TemplateWrapper>
  );
};

export const pageQuery = graphql`
  query pageTemplate($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default PageTemplate;
