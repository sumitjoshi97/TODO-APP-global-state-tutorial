import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StoreProvider } from './store/Store'
import * as serviceWorker from './serviceWorker'

const app = (
  <StoreProvider>
    <App />
  </StoreProvider>
)
ReactDOM.render(app, document.getElementById('root'))

serviceWorker.register()
