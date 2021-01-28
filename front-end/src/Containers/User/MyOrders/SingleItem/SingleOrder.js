import styles from './SingleOrder.module.css'
import moment from 'moment'
import React, {useEffect} from 'react'

const SingleOrder = (props) => {

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div>
            <div className={styles.grid}>
                <h3 className={styles.textContainer}>{`${parseFloat(props.order.amount / 100)} €`}</h3>
                <h3 className={styles.textContainer}>{props.order.order.reduce((acc, order) => acc + order.quantity, 0)}</h3>
                <h3 className={styles.textContainer}>{moment(props.order.createdAt).format('MMMM Do YYYY')}</h3>
                <h3 className={styles.textContainer}>{props.order.status}</h3>
            </div>
        </div>
    )
}

export default SingleOrder