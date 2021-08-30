import React, { Component } from 'react';
import {Navbar,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

 class Header extends Component {
  render() {
    return (
      <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ justifyContent: 'space-between' }}>
        <Container>
          <Navbar.Brand style={{ marginLeft: '10px' }}>My Favorite Drinks</Navbar.Brand>
        </Container>
        <Container>
          <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
          <Link style={{ textDecoration: 'none' }} to="/favorite">Favorite</Link>
          <Link style={{ textDecoration: 'none' }} to="/profile">Profile</Link>
          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}

          {
            this.props.auth0.isAuthenticated ?
              <LogoutButton /> :
              <LoginButton />
          }
        </Container>
      </Navbar>
    </header>
    )
  }
}

export default withAuth0(Header);