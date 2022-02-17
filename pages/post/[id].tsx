import Layout from '@components/Layout'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { Post } from 'types'

interface PostProps {
    post: Post
}

const Post: React.FC<PostProps> = ({ post }) => {
    /*
        *This gets the route params
        *
        const router = useRouter()
        const { id } = router.query
    */

    return (
        <Layout header={`post - ${post.title}`}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <br />
            <Link href="/">
                Go back
            </Link>
        </Layout>
    )
}

/*
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)

    const post = await res.json()

    return {
        props: {
            post
        }
    }
}
*/

/*
For dynamic page load getting static pages at build time
Use getStaticProps with getStaticPaths
*/
export const getStaticProps: GetStaticProps = async (context) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)

    const post = await res.json()

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    const posts = await res.json()

    const ids = posts.map((post: Post) => post.id) as Array<number>

    const paths = ids.map((id: number) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default Post