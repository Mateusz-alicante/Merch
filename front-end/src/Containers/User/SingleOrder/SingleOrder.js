import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import styles from './SingleOrder.module.css'
import moment from 'moment'
// import Item from './Items/Items'
import { connect } from 'react-redux'

import SingleItem from './Items/SingleItem'
import Actions from './Actions/Actions'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'

const SingleOrder = (props) => {

    const { id } = useParams()
    const [data, setData] = useState({})
    const [status, setStatus] = useState('loading')
    const [actionStatus, setActionStatus] = useState('loading')
    const history = useHistory()

    const fetchArticle = async () => {
        const response = await axios.get(`/api/orders/fetchOrder?id=${id}`, {
            headers: {
                authorization: props.redux.auth.token
            }
        })
        if (response && response.status === 200) {
            setData(response.data)
            setStatus('OK')
        }
    }

    const CancelOrder = async () => {
        setActionStatus("loading")
        const response = await axios.get(`/api/orders/cancel?id=${id}`, {
            headers: {
                authorization: props.redux.auth.token
            }
        })
        if (response && response.status === 200) {
            toast.success("Order has been canceled")
            setActionStatus(undefined)
            history.goBack()
        }
    }

    const FulfillOrder = async () => {
        setActionStatus("loading")
        const response = await axios.get(`/api/orders/fulfill?id=${id}`, {
            headers: {
                authorization: props.redux.auth.token
            }
        })
        if (response && response.status === 200) {
            toast.success("Order has been fulfilled")
            setActionStatus(undefined)
            history.goBack()
        }
    }


    useEffect(() => {
        fetchArticle()
    }, [])

    const LoadedContent = () => {
        return (
            <div>
                <h2>Order Details:</h2>
                <div className={styles.textInfoContainer}><h3>Date Created:</h3> <h3>{moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h3></div>
                <div className={styles.textInfoContainer}><h3>Status:</h3> <h3>{data.status}</h3></div>
                <div className={styles.textInfoContainer}><h3>Amount:</h3> <h3>{`${parseFloat(data.amount / 100)} €`}</h3></div>
                <div>
                    <h3>Items:</h3>
                    <div className={styles.grid}>
                        <div className={styles.textContainer}><h3>Image</h3></div>
                        <div className={styles.textContainer}><h3>Title</h3></div>
                        <div className={styles.textContainer}><h3>Quantity</h3></div>
                        <div className={styles.textContainer}><h3>Price</h3></div>
                        <div className={styles.textContainer}><h3>Size</h3></div>
                    </div>
                    {data.order.map(order => <SingleItem order={order} />)}
                </div>
                {data.status == "In Progress" && <Actions fulfill={FulfillOrder} cancel={CancelOrder} status={actionStatus} admin={props.redux.auth.isAdmin} />}
            </div>
        )
    }

    return (
        <div>
            {status == 'OK' ? LoadedContent() : <h1>Loading...</h1>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(SingleOrder)