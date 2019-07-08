import React, { Component } from 'react';
import Annotation from '../annotation';
import { Player } from 'video-react';
import { Container, Row, Col } from 'react-bootstrap';
import './main-content.css';
import VideoList from '../video-list/video-list';

class MainContent extends Component {
  state = {
    src:''
  }

  onSelect(event) {
    console.log('main-content says', event);
    this.setState((state, props) => {
      return {src: event};
    });
  }

  render() {
    return (
      <Container className="main-content">
        <Row>
          <Col lg="4">
            <VideoList onSelect={this.onSelect.bind(this)}></VideoList>
          </Col>
          <Col lg="8">
            <Player
              fluid={false}
              width={400}
              playsInline
              muted={false}
              src={this.state.src}
            ></Player>
            <Annotation></Annotation>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainContent;
