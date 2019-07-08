import React, { Component } from 'react';
import { Get } from 'react-axios';
import { env } from 'process';
import MinioFile  from '../minio-file';
import { ListGroup } from 'react-bootstrap';

const backendUrl = `${env.BACKEND || 'http://localhost:8000'}/api/videos`;

class VideoList extends Component {
  onSelect = function(event) {
    console.log('video-list says:', event);
    this.props.onSelect(event);
  }

  render() {
    return (
      <div>
      <Get url={ backendUrl } params={{}}>
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            const list = response.data.map(item =>{
              return <MinioFile key={item.etag} onSelect={this.onSelect.bind(this)} etag={item.etag} name={item.name} lastModified={item.lastModified} size={item.size} ></MinioFile>;
            })
            return (<div><ListGroup>{list}</ListGroup> <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
    </div>
    );
  }
}

export default VideoList;
