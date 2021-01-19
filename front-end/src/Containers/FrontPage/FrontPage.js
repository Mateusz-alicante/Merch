import React from 'react'
import styles from './FrontPage.module.css'
import { LoremIpsum } from 'react-lorem-ipsum';

import FrontImage from './FrontImage/FrontImage'


const FrontPage = () => {
    return (
        <div>
            <FrontImage />
            <div className={styles.textContainer}>
                <LoremIpsum p={3} />
            </div>
        </div>
    )
}

export default FrontPage