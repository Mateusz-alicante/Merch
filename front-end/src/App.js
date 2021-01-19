import styles from './App.module.css';
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

import Router from './Containers/Router/Router'
import Header from './Containers/Nav/Nav'

function App() {
  return (
    <div>
      <Header />
      <Router />
      <ToastContainer />
    </div>
  )
}

export default App;
