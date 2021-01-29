import styles from './SingleOrder.module.css'
import moment from 'moment'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const SingleOrder = (props) => {


    return (
        <div>
            <div className={styles.grid}>
                <h3 className={styles.textContainer}>{`${parseFloat(props.order.amount / 100)} €`}</h3>
                <h3 className={styles.textContainer}>{props.order.order.reduce((acc, order) => acc + order.quantity, 0)}</h3>
                <h3 className={styles.textContainer}>{moment(props.order.createdAt).format('MMMM Do YYYY')}</h3>
                <h3 className={styles.textContainer}>{props.order.status}</h3>
                <h3 className={styles.textContainer}><Link to={`/user/order/${props.order._id}`}>Details</Link></h3>
            </div>
        </div>
    )
}

export default SingleOrder