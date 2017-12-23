/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './changelog.module.css';

const ChangelogPage = ({ data }) => {
  const { html } = data.allGithubChangelog.edges[0].node;

  return (
    <div
      className={styles.changelog}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
};

ChangelogPage.propTypes = {
  data: PropTypes.object.isRequired,
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

