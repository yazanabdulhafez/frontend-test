import React, { Component } from 'react'
import {withAuth0 } from "@auth0/auth0-react";
import { Card } from 'react-bootstrap';

export class Profile extends Component {
  render() {
    return (
      <>
      <div>
        <h1>This is the profile page</h1>
      </div>
      <Card style={{ width: '18rem',margin:'50px' }}>
      <Card.Title>userName:{this.props.auth0.user.name}</Card.Title>
      <Card.Title>Email:{this.props.auth0.user.email}</Card.Title>
  <Card.Body>
    
  <Card.Img  variant="top" src={this.props.auth0.user.picture} />
   
  </Card.Body>
</Card>
</>
    )
  }
}

export default withAuth0( Profile);
