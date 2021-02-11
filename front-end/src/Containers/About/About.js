import React from 'react'
import ImageHolder from '../../Components/ImageHolder/ImageHolder'
import styles from './About.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const instaImageURL = "https://wearesocial-net.s3.amazonaws.com/sg/wp-content/uploads/sites/9/2020/10/instagram-logo.jpg"
const instaURL = 'https://www.instagram.com/dikaasbrand'

const About = () => {
    return (
        <div>
            <ImageHolder image={instaImageURL}><a href={instaURL} target="_blank" rel="noopener noreferrer"><div className={styles.instaContainer}>Follow us on Instagram! <FontAwesomeIcon icon={faExternalLinkAlt} /></div></a></ImageHolder>
        </div>
    )
}

export default About