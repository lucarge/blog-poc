import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '@blog/utils/typography'

type queryData = {
  avatar: {
    childImageSharp: {
      fixed: {}
    }
  }
  site: {
    siteMetadata: {
      author: string
      social: {
        twitter: string
      }
    }
  }
}

const renderQuery = ({ avatar, site: { siteMetadata: { author, social: { twitter } }}}: queryData) => (
  <div
    style={{
      display: `flex`,
      marginBottom: rhythm(2.5),
    }}
  >
    <Image
      alt={author}
      fixed={avatar.childImageSharp.fixed}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      }}
    />
    <p>
      Written by <strong>{author}</strong> who lives and works in Milan building useful things.
      {` `}
      <a href={`https://twitter.com/${twitter}`}>
        You should follow him on Twitter
      </a>
    </p>
  </div>
)

const Bio: React.FunctionComponent<{}> = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={renderQuery}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
