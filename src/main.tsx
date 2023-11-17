import { ParallaxProvider } from 'react-scroll-parallax'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import BottomScrollBar from './components/BottomScrollBar'

ReactDOM.render(
    <React.StrictMode>
        <ParallaxProvider>
            <Router>
                <App />
                <BottomScrollBar />
            </Router>
        </ParallaxProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
