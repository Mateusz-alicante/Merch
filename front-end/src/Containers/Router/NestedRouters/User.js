import React from "react";
import {
    Route,
} from "react-router-dom";

import UnderConstruction from '../../../Components/Contruction/Contruction'
import Dashboard from '../../User/Dashboard/Dashboard'
import NewItem from '../../User/Items/NewItem/NewItem'
import Cart from '../../User/Cart/Cart'
import MyOrders from '../../User/MyOrders/Orders'
import SingleOrder from '../../User/SingleOrder/SingleOrder'
import Stats from '../../User/Stats/Stats'

const App = () => {
    return (
        <>
            <Route path='/user' exact={true}>
                <Dashboard />
            </Route>

            <Route path='/user/cart' >
                <Cart />
            </Route>

            <Route path='/user/new-item' exact={true}>
                <NewItem />
            </Route>

            <Route path='/user/orders' exact={true}>
                <MyOrders />
            </Route>

            <Route path='/user/stats' exact={true}>
                <Stats />
            </Route>

            <Route path='/user/all-orders' exact={true}>
                <MyOrders all={true} />
            </Route>

            <Route path='/user/order/:id' exact={true}>
                <SingleOrder />
            </Route>


        </>
    )
}

export default App