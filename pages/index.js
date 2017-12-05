import fetch from 'isomorphic-unfetch'

import Layout from '../layouts/MyLayout.js'
import PostLink from '../components/PostLink'

const Index = ({shows}) => (
  <Layout>
    <p>Batman TV Shows</p>

    <ul>
      {shows.map(({show}) => (
        <PostLink key={show.id} show={show} />
      ))}
    </ul>

    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
        list-style-type: none;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}


export default Index
