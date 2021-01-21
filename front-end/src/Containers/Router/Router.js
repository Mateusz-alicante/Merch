import React from 'react'

import styles from './Router.module.css'

import {
    Switch,
    Route,
} from "react-router-dom";

import Test from '../Test/Test'
import FrontPage from '../FrontPage/FrontPage'

import Authrouter from './NestedRouters/Auth'

const Router = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                    <Switch>

                        <Route path="/" exact>
                            <FrontPage />
                        </Route>

                        <Route path="/auth" exact={false}>
                            <Authrouter />
                        </Route>

                        <Route path="/test">
                            <Test />
                        </Route>

                    </Switch>
            </div>
        </div>
    )
}

export default Router