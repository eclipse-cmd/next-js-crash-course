import type { NextApiRequest, NextApiResponse } from 'next'
import { posts } from 'data'
import { Post } from 'types'


export default function handler(
    _: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    res.status(200).json(posts)
}