import styles from './OrdersBySize.module.css'
import React, {useEffect} from 'react'

import Expandable from '../../../../../Components/Expandable/Expandable'

const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )

const Overview = (props) => {
    useEffect(() => {
        const table = objectMap(props.data, items => {
            objectMap(items.ordersBySize, (orders, size) => console.log(orders))
        })
        console.log(table)
    }, [])


    return (
        <div>
            <Expandable label={"Orders by size:"} default={false}>
                {Object.values(objectMap(props.data, item => (
                    <div className={styles.outerContainer}>
                        <div className={styles.initInfo}>
                            <h2>{item.title}</h2>
                            <img src={item.thumb} />
                        </div>
                        <table className={styles.mainTable}>
                        <tr>
                            <th>Size</th>
                            <th>In progress</th>
                            <th>Fulfilled</th>
                            <th>Cancelled</th>
                            <th>Returned</th>
                            <th>Total</th>
                        </tr>
                        {Object.values(objectMap(item.ordersBySize, (orders, size) => (
                            <tr className={styles.row}>
                                <td>{size}</td>
                                <td>{orders.InProgress}</td>
                                <td>{orders.Fulfilled}</td>
                                <td>{orders.Cancelled}</td>
                                <td>{orders.Returned}</td>
                                <td>{orders.InProgress + orders.Fulfilled + orders.Cancelled + orders.Returned}</td>
                            </tr>
                        )))}
                    </table>
                    </div>
                )))}
                {}
            </Expandable>
        </div>
    )
}

export default Overview