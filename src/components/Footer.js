import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer style={{
      
        width:'100%',
        height:'40px',   
        background:'#000'
     }}>
        <Navbar bg="dark" variant="dark">
          <Container style={{display:'flex',justifyContent:'center'}}>
            <h1 style={{color:'white'}}>all rights reserved &copy; Yazan Alkharabsheh</h1>
          </Container>
        </Navbar>
      </footer>
    )
  }
}

export default Footer;
