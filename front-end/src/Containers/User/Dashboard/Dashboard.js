import React from 'react'
import styles from './Dashboard.module.css'

import SingleItem from './SingleItem/SingleItem'
import { connect } from 'react-redux'

import { faPlus, faShoppingCart, faReceipt } from "@fortawesome/free-solid-svg-icons";

const Dashboard = (props) => {
    return (
        <div>
            <div className={styles.grid}>
                { props.redux.auth.isAdmin && <SingleItem key={"NewItem"} to={'/user/new-item'} text={"New Item"} icon={faPlus} />}
                <SingleItem key={"My Cart"} to={'/user/cart'} text={"My Cart"} icon={faShoppingCart} />
                <SingleItem key={"My Orders"} to={'/user/orders'} text={"My Orders"} icon={faReceipt} />
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