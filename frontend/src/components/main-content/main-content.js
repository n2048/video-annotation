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
          fluid={false}
          width={400}
          playsInline
          muted={false}
          src={"http://localhost:9000/videos/Movie%20on%203-13-19%20at%2023.52.mov.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=dml-minio%2F20190708%2F%2Fs3%2Faws4_request&X-Amz-Date=20190708T131129Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=3214d36c222d0248ff57ae5b86c5113a8f02ae55a64f612732a84e7bfd8e2f56"}
        ></Player>
        <Annotation></Annotation>
      </Container>
    )
  }
}

export default MainContent;
