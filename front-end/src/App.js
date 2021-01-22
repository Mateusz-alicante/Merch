import styles from './App.module.css';
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css';

import store from './Utils/Redux/StoreConfig'

import Router from './Containers/Router/Router'
import Header from './Containers/Nav/Nav'

import {
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Router />
          <ToastContainer position={"bottom-right"} />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
