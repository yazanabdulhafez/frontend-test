import React, { Component } from 'react';
import { Button, CardImg, Modal } from 'react-bootstrap';

export class ImageModal extends Component {
  render() {
    return (
      
    <Modal show={this.props.handleShow} onHide={this.props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.modalData.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <CardImg src={this.props.modalData.strDrinkThumb} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  
    )
  }
}

export default ImageModal;
