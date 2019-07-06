import React, { Component } from 'react';
import Annotation from '../annotation';
import { Player } from 'video-react';
import video from '../../media/00254.MTS.mp4';
import { Container } from 'react-bootstrap';
import './main-content.css';

class MainContent extends Component {
  render() {
    return (
      <Container className="main-content">
        <Player
          // poster=""
          fluid={false}
          width={400}
          playsInline
          muted={false}
          src={video}
        ></Player>
        <Annotation></Annotation>
      </Container>
    )
  }
}

export default MainContent;
