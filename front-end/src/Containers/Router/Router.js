import React from 'react'

import styles from './Router.module.css'

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Test from '../Test/Test'
import FrontPage from '../FrontPage/FrontPage'

const Router = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <BrowserRouter>
                    <Switch>

                        <Route path="/" exact>
                            <FrontPage />
                        </Route>

                        <Route path="/test">
                            <Test />
                        </Route>

                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Router