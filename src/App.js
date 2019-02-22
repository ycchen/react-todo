import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom'
import TodoPage from './containers/TodoPage'
import { Container } from 'semantic-ui-react';
import ContactPage from './containers/ContactPage'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <div className="ui two item menu">
            <NavLink className="item" activeClassName="active" exact to="/">Todos List</NavLink>
            {/* <NavLink className="item" activeClassName="active" exact to="/todos/new">Add Todo</NavLink> */}
            <NavLink className="item" activeClassName="active" exact to="/contacts">Contacts List</NavLink>
          </div>
          <Route exact path="/" component={TodoPage}/>
          <Route exact path="/contacts" component={ContactPage}/>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
