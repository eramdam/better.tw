/* eslint react/no-danger: 0 */
import { format } from 'date-fns';
import { graphql, StaticQuery } from 'gatsby';
import { rgba } from 'polished';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { TemplateWrapper } from '../components/templateWrapper';
import { GridBlock } from '../styles/globalStyles';

const StyledReleasesDiv = styled(GridBlock)`
  padding: 40px;

  .singleRelease {
    width: 100%;
    display: inline-block;
    margin: 20px 0;
    padding: 20px;
    padding-top: 10px;
    padding-right: 30px;
    background-image: radial-gradient(190px 200px at 0 0, #00cbfc 0%, rgba(0, 203, 252, 0) 114%),
      linear-gradient(-180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    background-repeat: no-repeat;
    background-color: #00a0fb;
    border-radius: 10px;
    color: white;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.28);
    box-shadow: 0 4px 30px rgba(0, 159, 251, 0.514);

    & > hr {
      border: 0;
      border-bottom: 1px dashed ${rgba('white', 0.4)};
      border-top: 1px dashed ${rgba('black', 0.3)};
      margin: 10px 0;
    }

    & > h1 {
      margin: 0;
    }
  }

  .releaseFooter {
    display: flex;
    justify-content: space-between;
  }

  .releaseExternalLink {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .releaseDate {
    font-size: 14px;
    display: inline-block;
  }

  .releaseDescription {
    font-size: 17px;
    line-height: 1.55;
    padding-top: 10px;
    padding-bottom: 15px;
  }
`;

const ChangelogPage = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const releases = data.allGithubRelease.edges.map(e => e.node);
      return (
        <TemplateWrapper>
          <StyledReleasesDiv>
            <Helmet title="Better TweetDeck | Release notes" />
            <h1>Release notes</h1>
            {releases.map(release => {
              const formattedDate = format(release.date, 'MM/DD/YYYY');

              return (
                <div key={release.id} className="singleRelease">
                  <h1 key={`title-${release.id}`}>{release.title}</h1>
                  <hr />
                  <div
                    key={`content-${release.id}`}
                    className="releaseDescription"
                    dangerouslySetInnerHTML={{
                      __html: release.description,
                    }}
                  />
                  <hr />
                  <footer className="releaseFooter">
                    <small className="releaseDate">
                      Released on <time dateTime={release.date}>{formattedDate}</time>
                    </small>
                    <small>
                      <a href={release.url} className="releaseExternalLink">
                        See on GitHub
                      </a>
                    </small>
                  </footer>
                </div>
              );
            })}
          </StyledReleasesDiv>
        </TemplateWrapper>
      );
    }}
  />
);

export default ChangelogPage;
