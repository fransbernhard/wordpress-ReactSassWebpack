import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';
import Single from './Single';

import { Link } from 'react-router-dom';

class Post extends Component {


  render() {
    let post = this.props.post;

    return (
      <Link to={`/archive/${post.slug}`} params={{slug: post.slug}}>
        <div className="post" key={post.i} >
          { post.featured_image_src
            ? <div className="post-img" style={{backgroundImage: `url(${post.featured_image_src})`}}/>
            : null
          }
          <h3 className="post-title">{post.title.rendered}</h3>
        </div>
      </Link>
    );
  }
}

export default Post;
