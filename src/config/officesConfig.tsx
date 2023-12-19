import { ImageProps } from 'next/image'
import mapImage from '/public/images/map.png'
import egyptFlag from '/public/images/egypt.svg'
import franceFlag from '/public/images/france.svg'
import usaFlag from '/public/images/usa.svg'
import greenlandFlag from '/public/images/greenland.svg'
import japanFlag from '/public/images/japan.svg'
import { OfficesGridItemProps } from '../components/blocks/officesGrid/officesGrid'

export const COfficesMapImage: ImageProps = {
    alt: 'Our offices',
    ...mapImage
}

export const COfficesGridItems: OfficesGridItemProps[] = [
    {
        title: 'Damietta',
        image: egyptFlag,
        phoneNumber: '+20 0219033',
        email: 'alexbank@damietta.com',
        address: '3 Al Togari, Qism Damietta, Damietta, Damietta Governorate 34511, Egypt',
        isLarge: true
    },
    {
        title: 'Lille',
        image: franceFlag,
        phoneNumber: '+33 3 20 54 44 50',
        email: 'theatre-sebastobol@lille.fr',
        address: 'Pl. Sébastopol, 59000 Lille, France',
        isLarge: true
    },
    {
        title: 'Dayton',
        image: usaFlag,
        phoneNumber: '+1 937 226 1710',
        email: 'info@americaspackardmuseum.org',
        address: '420 S Ludlow St, Dayton, OH 45402, United States',
    },
    {
        title: 'Kulusuk',
        image: greenlandFlag,
        phoneNumber: '+299 98 69 88',
        email: 'info@mit.gl',
        address: 'HVF8+R82, Kulusuk, Greenland',
        mobileOrder: 1
    },
    {
        title: 'Kanazawa',
        image: japanFlag,
        phoneNumber: '+81 76 220 2469',
        email: 'kanazawa@lg.jp',
        address: '1 Chome Higashiyama, Kanazawa, Ishikawa 920-0831, Japan',
    },
]