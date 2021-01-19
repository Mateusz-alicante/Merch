import React from 'react'
import styles from './Nav.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <div>
            <div className={styles.navHeader}>
                <h1>Site Name</h1>
                <nav className={styles.navContainer}>
                    <a >About</a>
                    <a >Services</a>
                    <a >Contact</a>
                </nav>
                <nav className={styles.mobileNavHeader}>
                    <FontAwesomeIcon icon={faBars} />
                </nav>
            </div>
        </div>
    )
}

export default Nav