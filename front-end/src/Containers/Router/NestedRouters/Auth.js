import React from "react";
import {
    Route,
} from "react-router-dom";


const App = () => {
    return (
        <>
            <Route path='/auth/login'>
                <p>Login</p>
            </Route>

            <Route path='/auth/signup'>
                <p>Sign Up</p>
            </Route>
        </>
    )
}

export default App