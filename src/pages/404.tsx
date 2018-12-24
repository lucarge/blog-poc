import React from 'react'
import Layout from '@blog/components/Layout'
import Seo from '@blog/components/Seo'

type Props = {
  location: {
    pathname: string
  }
}

const NotFoundPage: React.FunctionComponent<Props> = ({ location }) => (
  <Layout location={location}>
    <Seo title="404: Not Found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
