import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '@blog/utils/typography'

declare const __PATH_PREFIX__: string

type Props = {
  location: {
    pathname: string
  }
  title?: string
}

const rootPath = `${__PATH_PREFIX__}/`

const Layout: React.FunctionComponent<Props> = ({ children, location, title }) => {
  if (location.pathname === rootPath) {
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(36),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>

        {children}
      </div>
    )
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(36),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          🏡
        </Link>
      </h3>

      {children}
    </div>
  )
}

export default Layout
