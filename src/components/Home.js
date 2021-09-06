import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import ImageModal from './ImageModal';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkData: [],
      show: false,
      showModal:false,
      modalData:[]
    }
  }
  componentDidMount = () => {
    const drinkUrl = 'https://test-applicatt.herokuapp.com/drinks';
    axios.get(drinkUrl).then(response => {
      console.log(response.data)
      this.setState({
        drinkData: response.data,
        show: true
      })
    }).catch(error => console.log(error.message));

      axios.get("https://test-applicatt.herokuapp.com/favDrink").then((axiosRes) => {
        this.setState({
          favData: axiosRes.data,
          showFavData: true,
          showForm:false,
        });
        this.props.handleCounter(this.state.favData.length);
      });
   
  }

  createFavCard = (e, item) => {
    e.preventDefault();
    const dataBody = {
      strDrink: item.strDrink,
      strDrinkThumb: item.strDrinkThumb,

    }
    
    axios.post(`https://test-applicatt.herokuapp.com/favDrink`, dataBody).then(response => {
      console.log(response.data);
      if (response.data!=="data already exist"){
      this.props.handleCounter(this.props.counter+1);
      };
    }).catch(error => console.log(error));
  }

  handleModalShow=(element)=>{
    this.setState({
      showModal:true,
      modalData:element
    })
  }

  handleClose=()=>{
    this.setState({
      showModal:false,
    
    })
  }

  render() {
    return (
      <>
        {this.state.showModal&&<ImageModal
        handleShow={this.handleModalShow}
        modalData={this.state.modalData}
        handleClose={this.handleClose}
         />}

        <Row>
          {this.state.show && this.state.drinkData.map((element, index) => {
            return (<Col key={index}>

              <Card style={{ width: '18rem', margin: '20px 10px' }}>
                <Container >
                  <Card.Title >{element.strDrink}</Card.Title>
                </Container>
                <Card.Body>

                  <Card.Img variant="top" src={element.strDrinkThumb} />

                </Card.Body>
                <Card.Footer>
                  <Button onClick={()=>this.handleModalShow(element)} variant="primary">preview</Button>
                  {this.props.auth0.isAuthenticated && <Button onClick={(e) => { this.createFavCard(e, element) }} variant="primary">Add to favorite</Button>}
                </Card.Footer>
              </Card>
            </Col>)
          })}
        </Row>

      </>
    )
  }
}

export default withAuth0(Home);
