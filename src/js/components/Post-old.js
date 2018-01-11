import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';
import Modal from './Modal';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  render() {
    let post = this.props.post;

    return (
      <div>
        <div className="post" key={post.i} onClick={() => this.openModal()}>
          { post.featured_image_src
            ? <a href={post.link} className="post-link">
                <div className="post-img" style={{backgroundImage: `url(${post.featured_image_src})`}}/>
              </a>
            : null
          }
          <h3 className="post-title" dangerouslySetInnerHTML={{__html:post.title.rendered}} />
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} modalContainer="modalContainer" modalDiv="modalDiv" backdropClassName="backdropDiv">
          <button className="closeModal-btn" onClick={() => this.closeModal()}>x</button>
          <div className="subContainer">
            <div className="modal-img" style={{backgroundImage: `url(${post.featured_image_src})`}}/>
            <div className="modal-text">
              <h1>{post.title.rendered}</h1>
              <p>{post.content.rendered}</p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

}

export default Post;

// <div className="post" key={post.i} onClick={() => this.openModal()}>
//   { post.featured_image_src
//     ? <a href={post.link} className="post-link">
//         <div className="post-img" style={{backgroundImage: `url(${post.featured_image_src})`}}/>
//       </a>
//     : null
//   }
//   <h3 className="post-title"><a href={post.link}
//   dangerouslySetInnerHTML={{__html:post.title.rendered}}
//   /></h3>
// </div>
