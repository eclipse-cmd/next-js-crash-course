import React from 'react'
import style from "@styles/app.module.scss"

interface BarProps {
    duration: number
    progress: number
}

const Bar: React.FC<BarProps> = ({ duration, progress }) => {
    return (
        <div
            className={style.progress_bar}
            style={{
                marginLeft: `${(-1 + progress) * 100}%`,
                transition: `margin-left ${duration}ms linear`
            }}
        >
        </div>
    )
}


export default Bar