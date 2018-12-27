import React from 'react'
import { Link, graphql } from 'gatsby'
import Bio from '@blog/components/Bio'
import Layout from '@blog/components/Layout'
import SEO from '@blog/components/Seo'
import { rhythm } from '@blog/utils/typography'

type Props = {
  data: {
    allMarkdownRemark: {
      edges: [{
        node: {
          excerpt: string,
          fields: {
            slug: string,
          },
          frontmatter: {
            date: string,
            title: string,
          },
        },
      }],
    },
    site: {
      siteMetadata: {
        author: string,
        title: string,
      },
    },
  },
  location: {
    pathname: string,
  },
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

const BlogIndex: React.FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: {
      edges,
    },
    site: {
      siteMetadata: { title }
    }
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title="All posts"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />

    <Bio />

    { edges.map(({ node: { excerpt, fields: { slug }, frontmatter: { date, title } } }) => (
      <div key={slug}>
        <h3 style={{ marginBottom: rhythm(1 / 4) }}>
          <Link style={{ boxShadow: 'none' }} to={slug}>
            { title || slug }
          </Link>
        </h3>

        <small>{date}</small>

        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    )) }
  </Layout>
)

export default BlogIndex
