import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkData: [],
      show:false
    }
  }
  componentDidMount = () => {
    const drinkUrl = 'https://test-applicatt.herokuapp.com/drinks';
    axios.get(drinkUrl).then(response => {
      console.log(response.data)
      this.setState({
        drinkData: response.data,
        show:true
      })
    }).catch(error => console.log(error.message));
  }

  createFavCard= (e, item) => {
    e.preventDefault();
    const dataBody={
      strDrink: item.strDrink,
      strDrinkThumb: item.strDrinkThumb,
        
    }
    axios.post(`https://test-applicatt.herokuapp.com/favDrink`,dataBody).then(response=>{
      console.log(response.data)
    }).catch(error=>console.log(error));
}


  render() {
    return (

      <Row>
        {this.state.show&&this.state.drinkData.map((element, index) => {
          return (<Col key={index}>

            <Card style={{ width: '18rem', margin: '20px 10px' }}>
              <Container >
                <Card.Title >{element.strDrink}</Card.Title>
              </Container>
              <Card.Body>

                <Card.Img variant="top" src={element.strDrinkThumb} />

              </Card.Body>
              <Card.Footer>
                <Button onClick={this.handleModalShow} variant="primary">preview</Button>
                <Button onClick={(e) => {this.createFavCard(e,element)}} variant="primary">Add to favorite</Button>
              </Card.Footer>
            </Card>
          </Col>)
        })}
      </Row>
    )
  }
}

export default Home;
