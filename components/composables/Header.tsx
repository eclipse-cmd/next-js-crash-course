import React from 'react'
import styles from "@styles/header.module.scss"

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <h1 className={styles.title}>
            A new <span>WevDev</span> App
        </h1>
    )
}


export default Header