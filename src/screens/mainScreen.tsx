'use client'

import Container from '../components/general/container/container'
import PageTitle from '../components/blocks/pageTitle/pageTitle'
import { CMainScreenTitle } from '../config/mainScreenConfig'
import styles from './mainScreen.module.scss'
import OurOffices from '../components/blocks/ourOffices/ourOffices'

const MainScreen = () => {
    return (
        <div className={styles.mainScreen}>
            <Container>
                <div className={styles.pageTitle}>
                    <PageTitle {...CMainScreenTitle} />
                </div>
                <div className={styles.ourOffices}>
                    <OurOffices />
                </div>
            </Container>
        </div>
    )
}

export default MainScreen