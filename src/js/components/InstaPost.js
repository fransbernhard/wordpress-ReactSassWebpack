import React, { Component } from 'react';

class InstaPost extends Component {
  render() {
    return (
      <ul className="uls">
        {
          this.props.instaPosts.map(post =>
            <li className="lis" key={post.id}>
              <a href={post.link} target="_blank">
                <p>{post.likes.count}</p>
                <img src={post.images.thumbnail.url} />
              </a>
            </li>
          )
        }
      </ul>
    );
  }
}

export default InstaPost;
