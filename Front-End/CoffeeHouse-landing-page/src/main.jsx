// Main entry point of the React application
// This file renders the App component into the HTML

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot creates a root for React to render into
// We're rendering into the element with id="root" (from index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider makes the Redux store available to all components */}
    {/* All components inside Provider can access the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

