import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TheemChanger from './ModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TheemChanger>
        <App />
    </TheemChanger>
)
