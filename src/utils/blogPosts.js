import Post from '../content/posts/post.mdx'
import Post2 from '../content/posts/post2.mdx'
import Post3 from '../content/posts/post3.mdx'
import Post4 from '../content/posts/post4.mdx'

const blogPosts = [
  {
    slug: 'post-1',
    title: 'My First Blog Post',
    crDate: '01.01.2021',
    component: Post
  },
  {
    slug: 'post-2',
    title: 'İçtiğimiz kahveler uzun yaşamamızı sağlıyor olabilir mi?',
    crDate: '12.07.2017',

    component: Post2
  },
  {
    slug: 'post-3',
    title: 'Kablosuz Açma Kapama Anahtarı - Wireless Switch',
    crDate: '12.07.2017',
    component: Post3
  },
  {
    slug: 'post-4',
    title: 'Windows mağazasında Ubuntu!!!',
    crDate: '12.07.2017',
    component: Post4
  }
]

export default blogPosts
