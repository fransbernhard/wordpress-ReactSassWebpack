import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';
import Post from './Post';

class Archive extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    let allPosts = DataStore.getAllPosts();
    let page = DataStore.getPageBySlug('archive');
    let acf = page.acf;

    const divStyle = {
      backgroundImage: 'url(' + acf.archive_header_img + ')'
    }

    return (
      <div className="bg" style={divStyle}>
        <div className="post-container">
          <h1 className="archive-header">{acf.archive_title}</h1>
          <div className="post-wrapper">
            {
              allPosts.map((post, i) =>
                <Post
                  key={i}
                  post={post}
                />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Archive;
