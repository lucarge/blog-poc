import React from 'react'
import { Link, graphql } from 'gatsby'
import Bio from '@blog/components/Bio'
import Layout from '@blog/components/Layout'
import Seo from '@blog/components/Seo'
import { rhythm, scale } from '@blog/utils/typography'

type Props = {
  data: {
    markdownRemark: {
      excerpt: string,
      frontmatter: {
        date: string,
        title: string,
      },
      html: string,
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
  pageContext: {
    previous?: {
      fields: {
        slug: string,
      },
      frontmatter: {
        title: string,
      },
    },
    next?: {
      fields: {
        slug: string,
      },
      frontmatter: {
        title: string,
      },
    },
  },
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

const BlogPostTemplate: React.FunctionComponent<Props> = ({
  data: { markdownRemark },
  location,
  pageContext: { previous, next },
}) => (
  <Layout location={location} title={markdownRemark.frontmatter.title}>
    <Seo title={markdownRemark.frontmatter.title} description={markdownRemark.excerpt} />
    <h1>{markdownRemark.frontmatter.title}</h1>
    <p
      style={{
        ...scale(-1 / 5),
        display: 'block',
        marginBottom: rhythm(1),
        marginTop: rhythm(-1),
      }}
    >
      {markdownRemark.frontmatter.date}
    </p>
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    <hr
      style={{
        marginBottom: rhythm(1),
      }}
    />
    <Bio />

    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
      }}
    >
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  </Layout>
)

export default BlogPostTemplate
