import '../styles/main.scss'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import './store'
import App from './containers/App'

render(
  <App />,
  document.getElementById('root')
)