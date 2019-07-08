import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Axios from 'axios';

const backendUrl = `${process.env.BACKEND || 'http://localhost:8000' }/api/videos`;

class MinioFile extends Component {

  handleClick = (event) => {
    console.log('minio-file says (handleClick):', this.props.name, this.props.etag);
    Axios.get(`${backendUrl}/${this.props.name}/link`).then(response => {      
      console.log('minio-file says (handleClick): presignedUrl:',response.data.presignedUrl );
      this.props.onSelect(response.data.presignedUrl);
    });
  }

  render() {
    return <ListGroupItem onClick={this.handleClick.bind(this)}>{this.props.name}</ListGroupItem>;
  }
}

export default MinioFile;
