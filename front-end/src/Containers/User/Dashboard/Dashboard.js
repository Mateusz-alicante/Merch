import React from 'react'
import styles from './Dashboard.module.css'

import SingleItem from './SingleItem/SingleItem'
import { connect } from 'react-redux'

import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Dashboard = (props) => {
    return (
        <div>
            <div className={styles.grid}>
                { props.redux.auth.isAdmin && <SingleItem key={"NewItem"} to={'/user/new-item'} text={"New Item"} icon={faPlus} />}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(Dashboard)