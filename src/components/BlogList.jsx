import { Link } from 'react-router-dom'
import blogPosts from '../utils/blogPosts'

export default function BlogList() {
  return (
    <div className="p-3 space-y-5">
      <h1 className="text-3xl font-semibold">Blog Yazılarım</h1>
      <ul className="space-y-5 text-lg">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link to={`/post/${post.slug}`}>
              {post.title} - {post.crDate}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
