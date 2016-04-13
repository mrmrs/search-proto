
import React from 'react'
import ReactDOM from 'react-dom'
import tachyons from 'tachyons/css/tachyons.min.css'
import App from './components/App'
import { picfair } from './data'

const div = document.createElement('div')
document.body.appendChild(div)

ReactDOM.render(<App {...picfair} />, div)

