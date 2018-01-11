import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';

class Single extends Component {

  render() {
    console.log("posts: " + this.props.pageSlug);

    let post = DataStore.getPostBySlug(this.props.pageSlug);
    let acf = post.acf;

    return (
      <div>
        <h1>hejhej</h1>
        <div>{acf.post_content}</div>
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
