import styles from '@/styles/Slider.module.css'
import Image from 'next/image'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import bannerPajero from '../../assets/banner-pajero.jpg'
import bannerTriton from '../../assets/triton-banner.jpg'
import bannerXPander from '../../assets/banner-xpander.jpg'

export default function Slider () {
    return (
        <Slide>
            <div className="each-slide-effect">
                <Image
                    alt="The guitarist in the concert."
                    src={bannerPajero}
                    width={2250}
                    height={500}
                    layout="responsive"
                />
            </div>
            <div className="each-slide-effect">
                <Image
                    alt="The guitarist in the concert."
                    src={bannerTriton}
                    width={2250}
                    height={500}
                    layout="responsive"
                />
            </div>
            <div className="each-slide-effect">
                <Image
                    alt="The guitarist in the concert."
                    src={bannerXPander}
                    width={2250}
                    height={500}
                    layout="responsive"
                />
            </div>
        </Slide>
    )
}