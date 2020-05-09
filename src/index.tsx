import React from 'react'
import './ReactotronConfig'
import { Provider } from 'react-redux'

import store, { persistor } from '~/store'

import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
