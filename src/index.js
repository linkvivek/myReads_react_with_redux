import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';

      
      ReactDOM.render(<Provider store= { store }><BrowserRouter><Route component={App} /></BrowserRouter></Provider>, document.getElementById('root'))
