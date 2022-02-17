import Link from 'next/link'
import React from 'react'
import styles from "@styles/nav.module.scss"

interface NavProps { }

const Nav: React.FC<NavProps> = ({ }) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav