import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import TodoPage from './containers/TodoPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={TodoPage} />
        </Switch>
      </App>
    </BrowserRouter>
  )
  }

export default Routes