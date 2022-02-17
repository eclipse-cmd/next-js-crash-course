import React from 'react'
import { Post } from "types"
import style from "@styles/post.module.scss"
import Link from "next/link"

interface PostListProps {
    posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div className={style.grid}>
            {
                posts.map((post: Post) => (
                    <Link key={post.id} href="post/[id]" as={`/post/${post.id}`} >
                        <a className={style.card}>
                            <h2>{post.title} &rarr;</h2>
                            <p>{post.body}</p>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default PostList