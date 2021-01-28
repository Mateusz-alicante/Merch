import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import styles from './Cart.module.css'
import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { ClearCart } from '../../../Utils/Redux/Actions/Cart'

import SingleItem from './SingleItem/SingleItem'
import Button from '../../../Components/Forms/Button/SimpleButton/SimpleButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCashRegister } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {

    const [total, setTotal] = useState(0)
    const [status, setStatus] = useState(undefined)
    const history = useHistory()

    const Order = async () => {
        setStatus('loading')
        const response = await axios.post('/api/orders/new', {
            order: props.redux.cart
        }, {
            headers: {
                authorization: props.redux.auth.token
            }})
        console.log(response)
        if (response && response.status === 200) {
            setStatus(undefined) 
            toast.success('Order successful' ,{
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            props.dispatch(ClearCart())
            history.push('/user/orders')
        } else {
            setStatus(undefined)
            toast.error('Order unsuccessful, check the inputs and try again' ,{
                position: toast.POSITION.BOTTOM_RIGHT,
              })
        }
    }


    useEffect(() => {
        setTotal(props.redux.cart.reduce((acc, val) => acc + val.price * val.quantity, 0))
    }, [props.redux.cart])

    const cartContent = () => (
        <div>
            <div>{props.redux.cart.map((BasicItem) => <SingleItem item={BasicItem} />)}</div>
            <div className={styles.totlaContainer}><h2>Total:</h2> <h2>{`${parseFloat(total / 100)} €`}</h2></div>
            <div className={styles.buttonGrid}>
                <Button disabled={status == "loading"} submit={Order}>Order   <FontAwesomeIcon icon={faCashRegister} /></Button>
                <Button submit={() => props.dispatch(ClearCart())}><span style={{ color: "red" }}>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></span></Button>
            </div>
        </div>
    )
    return (
        <div>
            <h1>My Cart:</h1>
            <div className={styles.grid}>
                <div className={styles.textContainer}><h3>Image</h3></div>
                <div className={styles.textContainer}><h3>Title</h3></div>
                <div className={styles.textContainer}><h3>Quantity</h3></div>
                <div className={styles.textContainer}><h3>Price</h3></div>
                <div className={styles.textContainer}><h3>Size</h3></div>
                <div className={styles.textContainer}><h3>Remove</h3></div>
            </div>
            {props.redux.cart.length == 0 ? <h1 className={styles.ItemsMessage}>You have no items yet</h1> : cartContent()}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(Cart)