export type Post = {
    userId?: number
    excerpt?: string
    id: number | string
    title: string
    body: string
}

export type APIResponse = {
    status: boolean,
    message: string,
    data?: []
}