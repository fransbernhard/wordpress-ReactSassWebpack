import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';

class Single extends Component {
  render() {
    let parts = this.props.location.pathname.split('/');
    let lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    let post = DataStore.getPostBySlug(lastSegment);
    let acf = post.acf;

    return (
      <div className="single-container">
        <div className="single-wrapper">
          <h1>{post.title.rendered}</h1>
          <img src={post.featured_image_src} className="yes"/>
        </div>
      </div>
    );
  }
}

export default Single;
