/* eslint react/no-danger: 0 */
import { format } from 'date-fns';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { TemplateWrapper } from '../../layouts';
import styles from './index.module.css';

const ChangelogPage = () => (
  <StaticQuery
    query={graphql`query BTDMarkdownQuery {
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
    }`}
    render={(data) => {
        const releases = data.allGithubRelease.edges.map(e => e.node);
      return (
        <TemplateWrapper>
          <div
            className={styles.changelog}
          >
            <Helmet
              title="Better TweetDeck | Release notes"
            />
            <h1>Release notes</h1>
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
        </TemplateWrapper>
      );
    }}
  />
);

export default ChangelogPage;
