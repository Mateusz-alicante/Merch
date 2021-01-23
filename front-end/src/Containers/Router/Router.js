import React from 'react'

import styles from './Router.module.css'

import {
    Switch,
    Route,
} from "react-router-dom";

import UnderConstruction from '../../Components/Contruction/Contruction'
import FrontPage from '../FrontPage/FrontPage'

import Authrouter from './NestedRouters/Auth'
import UserRouter from './NestedRouters/User'

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

                        <Route path="/user" exact={false}>
                            <UserRouter />
                        </Route>

                        <Route path="/about">
                            <UnderConstruction />
                        </Route>

                        <Route path="/Store">
                            <UnderConstruction />
                        </Route>

                    </Switch>
            </div>
        </div>
    )
}

export default Router