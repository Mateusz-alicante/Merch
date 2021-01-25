import React from "react";
import {
    Route,
} from "react-router-dom";

import UnderConstruction from '../../../Components/Contruction/Contruction'
import Dashboard from '../../User/Dashboard/Dashboard'
import NewItem from '../../User/Items/NewItem/NewItem'

const App = () => {
    return (
        <>
            <Route path='/user' exact={true}>
                <Dashboard />
            </Route>

            <Route path='/user/new-item' exact={true}>
                <NewItem />
            </Route>

        </>
    )
}

export default App