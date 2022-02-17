import Header from '@components/composables/Header'
import Layout from '@components/Layout'
import PostList from '@components/PostList'
import React from 'react'
import { Post } from 'types'

interface HomeProps {
  posts: Post[]
}

const Home: React.FC<HomeProps> = ({ posts }) => {

  return (
    <Layout header='Home'>
      <Header />
      <h1>Welcome to next</h1>
      <h3>This is the home page</h3>
      <PostList posts={posts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)

  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default Home