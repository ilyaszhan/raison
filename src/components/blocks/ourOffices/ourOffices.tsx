'use client'

import Image from 'next/image'
import styles from './ourOffices.module.scss'
import { COfficesMapImage } from '../../../config/officesConfig'
import OfficesGrid from '../officesGrid/officesGrid'

const OurOffices = () => {
    return (
        <div className={styles.ourOffices}>
            <div className={styles.map}>
                <Image
                    src={COfficesMapImage.src}
                    alt="Our offices"
                    width={COfficesMapImage.width}
                    height={COfficesMapImage.height}
                    priority
                    sizes="100vw"
                />
            </div>
            <div className={styles.officesGrid}>
                <OfficesGrid />
            </div>
        </div>
    )
}

export default OurOffices