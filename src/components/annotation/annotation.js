import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';
import './annotation.css';

class Annotation extends Component {
  render() {
    return (
      <Container className="annotation">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Annotation;
