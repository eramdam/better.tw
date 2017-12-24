
/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './about.module.css';

const AboutPage = ({ data }) => (
  <div className={styles.about}>
    <div
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />
  </div>
);

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const query = graphql`
query FAQPage {
  allMarkdownRemark(
    filter: {
      fileAbsolutePath: {regex: "/about.md/"}
   }
  ) {
    edges {
      node {
        fileAbsolutePath
        html
      }
    }
  }
}
`;

