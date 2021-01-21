import React from 'react'
import styles from './FrontPage.module.css'
import { LoremIpsum } from 'react-lorem-ipsum';

import FrontImage from '../../Components/ImageHolder/ImageHolder'
import WaterImage from '../../Assets/Images/sea.jpg'


const FrontPage = () => {
    return (
        <div>
            <FrontImage text={""} image={WaterImage}><p>Purchase your European School apparel now!</p></FrontImage >
            <div className={styles.textContainer}>
                <LoremIpsum p={3} />
            </div>
        </div>
    )
}

export default FrontPage