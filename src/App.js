import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom'
import TodoPage from './containers/TodoPage'
import { Container } from 'semantic-ui-react';
import ContactPage from './containers/ContactPage'
import ContactFormPage from './containers/ContactFormPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <div className="ui three item menu">
            <NavLink className="item" activeClassName="active" exact to="/">Todos List</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/contacts">Contacts List</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/contacts/new">Add Contact</NavLink>
          </div>
          <Route exact path="/" component={TodoPage} />
          <Route exact path="/contacts" component={ContactPage} />
          <Route exact path="/contacts/new" component={ContactFormPage} />
          <Route exact path="/contacts/edit/:id" component={ContactFormPage} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
