import Layout from '../layouts/MyLayout.js'

import PostLink from '../components/PostLink'

const Index = () => (
  <Layout>
    <p>My Blog</p>

    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Nest.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)

export default Index
