import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextTodo from './components/ContextTodo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextTodo>
      <App />
    </ContextTodo>
  </React.StrictMode>,
)
