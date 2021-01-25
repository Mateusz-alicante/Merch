import React from 'react'
import styles from './Dashboard.module.css'

import SingleItem from './SingleItem/SingleItem'

import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    return (
        <div>
            <div className={styles.grid}>
                <SingleItem to={'/user/new-item'} text={"New Item"} icon={faPlus} />

            </div>
        </div>
    )
}

export default Dashboard