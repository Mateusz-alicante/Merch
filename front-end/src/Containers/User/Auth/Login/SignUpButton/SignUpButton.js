import styles from './SignUpButton.module.css'
import React from 'react'

import ImagePeople from '../../../../../Assets/Images/people.jpg'

import ImageHolder from '../../../../../Components/ImageHolder/ImageHolder'


const SignUpButton = () => {
    return (
        <div>
            <ImageHolder image={ImagePeople} ><div className={styles.SignUpButton}>If you still dont have an account, create one now!</div></ImageHolder>
        </div>
    )
}

export default SignUpButton