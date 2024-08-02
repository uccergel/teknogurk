import { useParams } from 'react-router-dom'
import blogPosts from '../utils/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  const PostContent = post.component
  return (
    <div className="space-y-5">
      <h1 className="text-xl">{post.title}</h1>
      <PostContent />
    </div>
  )
}
