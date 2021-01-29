import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import styles from './Orders.module.css'
import SingleOrder from './SingleItem/SingleOrder'

// import SingleItem from './SingleItem/SingleItem'
import Button from '../../../Components/Forms/Button/SimpleButton/SimpleButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCashRegister } from "@fortawesome/free-solid-svg-icons";

const Orders = (props) => {

    const [status, setStatus] = useState(undefined)
    const [orders, setOrders] = useState(undefined)

    useEffect(
        async () => {
            setStatus('loading')
            const response = await axios.get('/api/orders/loadMyOrders', {
                headers: {
                    authorization: props.redux.auth.token
                }
            })
            if (response && response.status === 200) {
                setOrders(response.data)
                setStatus(undefined)
                // history.push('/user')
            } else {
                setStatus(undefined)
                toast.error('Cannot fetch your orders')
            }
        }, [])

    const OrdersContent = () => (
        <div>
            <div>{orders.map((order) => <SingleOrder order={order} />)}</div>
        </div>
    )
    return (
        <div>
            <h1>My Orders:</h1>
            <div className={styles.grid}>
                <div className={styles.textContainer}><h3>Amount</h3></div>
                <div className={styles.textContainer}><h3>Number of items</h3></div>
                <div className={styles.textContainer}><h3>Date Ordered</h3></div>
                <div className={styles.textContainer}><h3>Status</h3></div>
                <div className={styles.textContainer}><h3>Details</h3></div>
            </div>
            {( !orders || orders.length == 0 ) ? <h1 className={styles.ItemsMessage}>You have no orders yet</h1> : OrdersContent()}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(Orders)