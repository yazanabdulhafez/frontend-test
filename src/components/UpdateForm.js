import React, { Component } from 'react';
import { Form , Button, Modal} from 'react-bootstrap';

export class UpdateForm extends Component {
  render() {
    return (
      <>
      <Modal show={this.props.showForm}>
        <Modal.Header>
          <Modal.Title>Updating my drink</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => this.props.updateData(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Drink name</Form.Label>
              <Form.Control type="text" onChange={(e) => this.props.setStrDrink(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Drink Image</Form.Label>
              <Form.Control type="text" onChange={(e) => this.props.setStrDrinkThumb(e)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}

export default UpdateForm
