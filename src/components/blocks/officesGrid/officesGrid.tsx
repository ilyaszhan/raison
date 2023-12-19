'use client'

import Image, { StaticImageData } from 'next/image'
import styles from './officesGrid.module.scss'
import { COfficesGridItems } from '../../../config/officesConfig'
import Link from 'next/link'
import clsx from 'clsx'

export interface OfficesGridItemProps {
    title: string,
    image: StaticImageData,
    phoneNumber: string,
    email: string,
    address: string,
    isLarge?: boolean,
    mobileOrder?: number
}

const OfficesGridItem = ({ title, image, phoneNumber, email, address, isLarge = false, mobileOrder = 0 }: OfficesGridItemProps) => {
    return (
        <div
            className={clsx(styles.item, isLarge ? styles.large : null)}
            style={
                {
                    '--mobile-order': mobileOrder,
                } as React.CSSProperties
            }
        >
            <div className={styles.header}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.image}>{
                    <Image
                        src={image.src}
                        alt={title}
                        fill
                    />
                }</div>
            </div>
            <div className={styles.body}>
                <div className={styles.contacts}>
                    <Link href={`tel:${phoneNumber}`} className={styles.link}>{phoneNumber}</Link>
                    <Link href={`mailto:${email}`} className={styles.link}>{email}</Link>
                </div>
                <address className={styles.address}>{address}</address>
            </div>
        </div>
    )
}

const OfficesGrid = () => {
    return (
        <div className={styles.officesGrid}>
            <div className={styles.line}>
                {
                    COfficesGridItems.map((props, index) => {
                        return <OfficesGridItem {...props} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default OfficesGrid