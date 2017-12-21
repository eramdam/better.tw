import React from 'react';
import styles from './changelog.module.css';

const ChangelogPage = ({ data }) => {
  const { html } = data.allGithubChangelog.edges[0].node;

  return (
    <div
      className={styles.changelog}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default ChangelogPage;

export const query = graphql`
  query BTDMarkdownQuery {
    allGithubChangelog {
      edges {
        node {
          id,
          html
        }
      }
    }
  }
`;

