import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faShoppingCart, faHome, faAddressCard, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

    const [menuOpen, setOpen] = useState(false)

    useEffect(() => console.log(menuOpen))


    return (
        <div className={styles.outerContainer}>
            <div className={styles.navHeader}>
                <h1>Site Name</h1>
                <nav className={styles.navContainer}>
                    <span><NavLink className={styles.navLink} to={'/'}>Home</NavLink></span>
                    <span>Store</span>
                    <span>About</span>
                    <span><NavLink className={styles.navLink} to={'/auth/login'}>My account</NavLink></span>
                </nav>
                <nav className={styles.mobileNavHeader} onClick={() => setOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </nav>
            </div>
            <div className={styles.navMobileContainer} style={{height: menuOpen ? "10em" : "0"}}>
                <nav className={styles.navMobileInnerContainer}>
                    <span><NavLink className={styles.navLink} to={'/'}><FontAwesomeIcon icon={faHome} />Home</NavLink></span>
                    <span><FontAwesomeIcon icon={faShoppingCart} /> Store</span>
                    <span><FontAwesomeIcon icon={faInfoCircle} /> About</span>
                    <span><NavLink className={styles.navLink} to={'/auth/login'}><FontAwesomeIcon icon={faAddressCard} /> My account</NavLink></span>
                </nav>
            </div>
        </div>
    )
}

export default Nav