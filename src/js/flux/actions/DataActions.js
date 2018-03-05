import axios from 'axios';
import alt from '../alt/alt.js';

class DataActions {
  constructor(){
    const appUrl = 'http://localhost/wordpress/';
    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
    this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts?per_page=30`;
  }

  // Asynchronous: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. A Promise is in one of these states:
  // pending: initial state, neither fulfilled nor rejected.
  // fulfilled: meaning that the operation completed successfully.
  // rejected: meaning that the operation failed.

  // Get data from endPoint
  api(endPoint){
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  getPages(cb){
    this.api(this.pagesEndPoint).then((response) => {
      this.getPosts(response, cb);
    });
    return true;
  }

  getPosts(pages, cb){
    this.api(this.postsEndPoint).then((response) => {
      const posts = response;
      const pagesPosts = {pages, posts};
      this.getSuccess(pagesPosts); //Pass returned data to the store
      cb(pagesPosts); // callback will be used for dynamic rout building
    });
    return true;
  }

  // Get Pages and Posts. The 'alt' store will listen for this method to fire and then store will the returned data
  getSuccess(pagesPosts){
    return pagesPosts;
  }

}

export default alt.createActions(DataActions);
