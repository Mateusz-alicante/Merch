import React from "react";
import {
    Route,
} from "react-router-dom";

import Editor from '../../user/publishing/Editor/Editor'
import Dashboard from '../../user/Dashboard/Dashboard'

const App = () => {
    return (
        <>
            <Route path='/user/writePost'>
                <Editor />
            </Route>

            <Route path='/user' exact>
                <Dashboard />
            </Route>
        </>
    )
}

export default App