import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import styles from './SingleOrder.module.css'
import moment from 'moment'
// import Item from './Items/Items'
import { connect } from 'react-redux'

const SingleOrder = (props) => {

    const { id } = useParams()
    const [data, setData] = useState({})
    const [status, setStatus] = useState('loading')

    const fetchArticle = async () => {
        const response = await axios.get(`/api/orders/fetchOrder?id=${id}`, {
            headers: {
                authorization: props.redux.auth.token
            }})
        if (response && response.status === 200) {
            setData(response.data)
            setStatus('OK')
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