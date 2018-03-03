import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';

class Single extends Component {
  render() {
    console.log("POSTSLUG: " + this.props.location.pathname);
    var parts = this.props.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    console.log(lastSegment);

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


// <div className="single-container">
//   <div className="single-wrapper">
//         <div className="post">
//           { post.featured_image_src
//             ? <div style={{backgroundImage: `url(${post.featured_image_src})`}}/>
//             : null
//           }
//           <div className="modal-text">
//             <h1>{post.title.rendered}</h1>
//             <p>{post.content.rendered}</p>
//           </div>
//         </div>
//       )
//     }
//   )}
// </div>
// </div>
