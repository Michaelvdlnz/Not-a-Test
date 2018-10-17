import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './styles.css'

import App from './containers/App'
import rootReducer from './state/reducers'

const state = createStore(rootReducer)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  rootElement
)

//My code
//I create elements representing the current state,
// and let React update the UI to match them.
function UserGreeting(props) {
  return <h1>Hi {props.name}, so nice to see you back!</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
}
//this code here is to check if it work!!
ReactDOM.render(
  // Try changing to isLoggedIn={false}:
  <Greeting isLoggedIn={true} />,
  document.getElementById('greetingUsers')
)

// this code render the name of the users but haven't finish it
const element = <UserGreeting name="Michael" />
ReactDOM.render(element, document.getElementById('greetingUsers'))
