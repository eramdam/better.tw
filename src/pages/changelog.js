/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styles from './changelog.module.css';

const ChangelogPage = ({ data }) => {
  const releases = data.allGithubRelease.edges.map(e => e.node);

  return (
    <div
      className={styles.changelog}
    >
      {releases.map((release) => {
        const formattedDate = format(release.date, 'MM/DD/YYYY');

        return (
          <div key={release.id} className={styles.singleRelease}>
            <h1 key={`title-${release.id}`}>
              {release.title}
            </h1>
            <hr />
            <div
              key={`content-${release.id}`}
              className={styles.releaseDescription}
              dangerouslySetInnerHTML={{
                __html: release.description,
              }}
            />
            <hr />
            <footer
              className={styles.releaseFooter}
            >
              <small
                className={styles.releaseDate}
              >
                Released on <time dateTime={release.date}>{formattedDate}</time>
              </small>
              <small>
                <a href={release.url} className={styles.releaseExternalLink}>See on GitHub</a>
              </small>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

ChangelogPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChangelogPage;

export const query = graphql`
  query BTDMarkdownQuery {
    allGithubRelease {
      edges {
        node {
          id
          title
          url
          description
          date
        }
      }
    }
  }
`;

