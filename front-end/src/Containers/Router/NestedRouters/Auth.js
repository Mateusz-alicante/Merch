import React from "react";
import {
    Route,
} from "react-router-dom";

import Login from '../../User/Auth/Login'

const App = () => {
    return (
        <>
            <Route path='/auth/login'>
                <Login />
            </Route>

            <Route path='/auth/signup'>
                <p>Sign Up</p>
            </Route>
        </>
    )
}

export default App