'use client'

import styles from './pageTitle.module.scss'

export interface PageTitleProps {
    title: string,
    text: string | JSX.Element
}

const PageTitle = ({ title, text }: PageTitleProps) => {
    return (
        <div className={styles.pageTitle}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default PageTitle