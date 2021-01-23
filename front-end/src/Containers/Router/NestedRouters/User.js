import React from "react";
import {
    Route,
} from "react-router-dom";

import UnderConstruction from '../../../Components/Contruction/Contruction'

const App = () => {
    return (
        <>
            <Route path='/user' exact={true}>
                <UnderConstruction />
            </Route>

        </>
    )
}

export default App