import type { NextApiRequest, NextApiResponse } from 'next'
import { posts } from 'data'
import { Post, APIResponse } from 'types'

export default function handler(
    { query }: NextApiRequest,
    res: NextApiResponse<Post | APIResponse>
) {
    const filtered = posts.filter((post: Post) => post.id === query.id)

    if (filtered.length <= 0) {
        return res.status(404).json({
            status: false,
            message: `post not found`
        })
    }

    res.status(200).json(filtered[0])
}
