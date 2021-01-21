import { createStore, combineReducers } from 'redux'

import Auth from './Reducers/Auth'

const store = createStore(combineReducers({
    auth: Auth,
},
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store