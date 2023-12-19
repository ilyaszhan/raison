'use client'

import { PropsWithChildren } from "react"
import styles from './container.module.scss'

const Container = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container