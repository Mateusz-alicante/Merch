import React, {useState, useEffect} from 'react'
import styles from './Nav.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faShoppingCart, faHome, faAddressCard, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

    const [menuOpen, setOpen] = useState(false)

    useEffect(() => console.log(menuOpen))


    return (
        <div>
            <div className={styles.navHeader}>
                <h1>Site Name</h1>
                <nav className={styles.navContainer}>
                    <a>Home</a>
                    <a>Store</a>
                    <a>About</a>
                    <a>My account</a>
                </nav>
                <nav className={styles.mobileNavHeader} onClick={() => setOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </nav>
            </div>
            <div className={styles.navMobileContainer} style={{height: menuOpen ? "10em" : "0", opacity: menuOpen ? "100%" : "0"}}>
                <nav className={styles.navMobileInnerContainer}>
                    <a><FontAwesomeIcon icon={faHome} /> Home</a>
                    <a><FontAwesomeIcon icon={faShoppingCart} /> Store</a>
                    <a><FontAwesomeIcon icon={faInfoCircle} /> About</a>
                    <a><FontAwesomeIcon icon={faAddressCard} /> My account</a>
                </nav>
            </div>
        </div>
    )
}

export default Nav