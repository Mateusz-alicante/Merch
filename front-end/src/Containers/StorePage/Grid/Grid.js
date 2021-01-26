import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Grid.module.css'

import SingleItem from './SingleItem/SingleItem'


const Dashboard = () => {
    const [Items, setItems] = useState([])

    useEffect(async () => {
        const response = await axios.get(`/api/items/loadItems`)
        if (response && response.status === 200) {
            setItems(response.data)
        }
    }, [])
    return (
        <div>
            <div className={styles.grid}>
                {Items.map(item => <SingleItem item={item} />)}
            </div>
        </div>
    )
}

export default Dashboard