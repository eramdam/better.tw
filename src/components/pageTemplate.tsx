import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { PageTemplateQuery } from '../../graphql-types';
import { GridBlock } from '../styles/globalStyles';
import { TemplateWrapper } from './templateWrapper';

const StyledBlock = styled(GridBlock)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1em;
    margin-bottom: 0.4em;
    line-height: 1.8;
  }

  a {
    color: #00cbfc;
    color: #00a0fb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ol,
  ul {
    margin: 1em;
    margin-bottom: 0;
  }

  .content {
    font-size: 18px;
  }

  .content,
  .content p {
    line-height: 1.8;
  }

  .footnotes {
    margin-top: 4em;
    hr {
      border: 0;
      outline: none;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 2em;
    }
  }
`;

const PageTemplate = (props: { data: PageTemplateQuery }) => {
  const { data } = props;
  const { markdownRemark } = data;
  const html = markdownRemark?.html || '';
  const frontmatter = markdownRemark?.frontmatter;

  return (
    <TemplateWrapper title={frontmatter?.title || ''} showDownloads={!frontmatter?.hideDownloads}>
      <StyledBlock>
        <h1>{frontmatter?.title}</h1>

        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </StyledBlock>
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
        hideDownloads
      }
    }
  }
`;

export default PageTemplate;