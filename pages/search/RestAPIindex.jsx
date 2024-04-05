// import './App.css'
import { getPostsData } from '../../utils/algolia-client'
import { Post  } from '../../components/Common/Search/Post'
import { useState, useEffect } from 'react'

export default function index() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState()
  useEffect(() => {
    const handler = async () => {
      setLoading(true)
      const data = await getPostsData('')
      if (data) setPosts(data.posts)
      setLoading(false)
    }
    handler()
  }, [])

  return (
    <main>
      <h1 className="page-title">POSTS</h1>
      <section className="posts">
        {!posts?.length && <p className="state-message">{loading ? 'Fetching posts...' : 'No results!'}</p>}
        {!!posts?.length && posts.map((post) => <Post post={post} key={post.objectID} />)}
      </section>
    </main>
  )
}
