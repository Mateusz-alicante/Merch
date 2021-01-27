import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import styles from './Cart.module.css'

import { connect } from 'react-redux'
import {ClearCart} from '../../../Utils/Redux/Actions/Cart'

import SingleItem from './SingleItem/SingleItem'
import Button from '../../../Components/Forms/Button/SimpleButton/SimpleButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCashRegister } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {

    const Order = () => {
        toast.error("This option is under development")
    }

    const clearCart = () => {
        props.dispatch(ClearCart())
    }
    return (
        <div>
            <h1>My Cart:</h1>
            <div className={styles.grid}>
                <div className={styles.textContainer}><h3>Image</h3></div>
                <div className={styles.textContainer}><h3>Title</h3></div>
                <div className={styles.textContainer}><h3>Quantity</h3></div>
                <div className={styles.textContainer}><h3>Price</h3></div>
                <div className={styles.textContainer}><h3>Remove</h3></div>
            </div>
            {props.redux.cart.length == 0 && <h1>You have no items yet</h1>}
            <div>{props.redux.cart.map((BasicItem) => <SingleItem item={BasicItem} />)}</div>
            <div className={styles.buttonGrid}>
                <Button submit={Order}>Order   <FontAwesomeIcon icon={faCashRegister} /></Button>
                <Button submit={clearCart}><span style={{color: "red"}}>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></span></Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(Cart)