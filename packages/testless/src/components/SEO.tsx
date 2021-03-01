/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO: React.FC<{ description?: string; lang?: string; meta?: any[]; title?: string; }> = ({ description, lang = 'en-US', meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://www.testless.com/og-image.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >

      <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://www.testless.com",
                "name": "testless GmbH",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+49 176 3434 0377",
                  "email": "sales@testless.com",
                  "contactType": "Sales"
                }
              }
            `}
  </script>
    </Helmet>
  );
}
