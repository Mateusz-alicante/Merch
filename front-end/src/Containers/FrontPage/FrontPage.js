import React from 'react'
import styles from './FrontPage.module.css'
import { LoremIpsum } from 'react-lorem-ipsum';

import FrontImage from '../../Components/ImageHolder/ImageHolder'


const FrontPage = () => {
    return (
        <div>
            <FrontImage text={""} image={"https://www.escuelaeuropea.org/sites/default/files/2019-11/FOTO%20EEA%20AEREA.jpg"}>
                <div className={styles.imageTextContainer}>
                    <p className={styles.frontImageText}>Purchase your European School apparel now!</p>
                </div>
            </FrontImage >
            <div className={styles.textContainer}>
                <LoremIpsum p={3} />
            </div>
        </div>
    )
}

export default FrontPage