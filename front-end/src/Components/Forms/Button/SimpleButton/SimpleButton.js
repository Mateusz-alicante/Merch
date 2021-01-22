import React from 'react'
import styles from './SimpleButton.module.css'


const SimpleButton = (props) => {
    return (
        <button className={styles.button}>
            {props.children}
        </button>
    )
}

export default SimpleButton