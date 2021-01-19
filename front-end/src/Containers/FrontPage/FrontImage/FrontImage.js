import React from 'react'
import styles from './FrontImage.module.css'
import SchoolImage from '../../../Assets/Images/sea.jpg'


const FrontPage = () => {
    return (
        <div>
            <div className={styles.imageContainer}>
                <img src={SchoolImage} />
                <div className={styles.centered}>Purchase your European School apparel now!</div>
            </div>
        </div>
    )
}

export default FrontPage