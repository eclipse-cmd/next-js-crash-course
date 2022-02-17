import React from 'react'
import Layout from '@components/Layout'

interface AboutProps { }

const about: React.FC<AboutProps> = ({ }) => {
    return (
        <Layout header='About'>
            <h1>Welcome to next app</h1>
            <h3>This is the about page</h3>
        </Layout>
    )
}

export default about