import Layout from '../layouts/MyLayout.js'

import PostLink from '../components/PostLink'

const Index = () => (
  <Layout>
    <p>My Blog</p>

    <ul>
      <PostLink id="hello-next-js" title="Hello Next.js" />
      <PostLink id="learn-next-js-is-awesome" title="Learn Next.js is awesome" />
      <PostLink id="deploy-apps-with-zeit" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)

export default Index
