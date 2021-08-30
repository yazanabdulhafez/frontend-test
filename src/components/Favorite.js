import React, { Component } from 'react'
import {withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Card, Col, Container, Row ,Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';


export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData:[],
      showFavData:false,
      id:0,
      strDrink: "",
      strDrinkThumb: "",
      showForm:false,
    }
  }
  componentDidMount = () => {
    axios.get("https://test-applicatt.herokuapp.com/favDrink").then((axiosRes) => {
      this.setState({
        favData: axiosRes.data,
        showFavData: true,
        showForm:false,
      });
    });
  };

  ////////////////

  deleteFav = (id) => {
    console.log('hello');
    console.log(id);
    axios.delete(`https://test-applicatt.herokuapp.com/favDrink/${id}`).then(() => {
      axios.get("https://test-applicatt.herokuapp.com/favDrink").then((axiosRes) => {
        this.setState({
          favData: axiosRes.data,
          showFavData: true,
          showForm:false,
        });
      });
    });
  };

 
 ////////////// Show Update Form //////////////
 setShowUpdateForm = (id) => {
   console.log(id);
  this.setState({
    showForm: !this.state.showForm,
    id: id,
  });
};
  ///////////
  setStrDrink = (e) => this.setState({ strDrink: e.target.value });
  setStrDrinkThumb = (e) => this.setState({ strDrinkThumb: e.target.value });

   //////////////  Update Data On Database  //////////////
   updateData = (e) => {
    e.preventDefault();
    axios
      .put(`https://test-applicatt.herokuapp.com/favDrink/${this.state.id}`, {
        strDrink: this.state.strDrink,
        strDrinkThumb: this.state.strDrinkThumb,
      })
      .then(() => {
        axios.get(`https://test-applicatt.herokuapp.com/favDrink`).then((axiosRes) => {
          this.setState({
            favData: axiosRes.data,
            showFavData: true,
            showForm: false,
          });
        });
      });
  };
  ////////////// Close Update Form  //////////////
  handleClose = () => {
    this.setState({
      showForm: false,
    });
  };


  render() {
    return (
      <div>
       <h1>here my favorite drinks</h1> 
       {this.state.showForm&&<UpdateForm showForm={this.state.showForm} 
        setStrDrink={this.setStrDrink}
        setStrDrinkThumb={this.setStrDrinkThumb}
        handleClose={this.handleClose}
        updateData={this.updateData}

       />}
       <Row>
        {this.state.favData.map((element, index) => {
          return (<Col key={index}>

            <Card style={{ width: '18rem', margin: '20px 10px' }}>
              <Container >
                <Card.Title >{element.strDrink}</Card.Title>
              </Container>
              <Card.Body>

                <Card.Img variant="top" src={element.strDrinkThumb} />

              </Card.Body>
              <Card.Footer>
                <Button onClick={() => this.setShowUpdateForm(element._id)} variant="primary">Update</Button>
                <Button onClick={() => this.deleteFav(element._id)} variant="primary">Delete</Button>
              </Card.Footer>
            </Card>
          </Col>)
        })}
      </Row>
      </div>
    )
  }
}

export default withAuth0(Favorite);
