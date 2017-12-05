import Link from 'next/link'

const PostLink = ({show}) => (
  <li>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
  </li>
)


export default PostLink;