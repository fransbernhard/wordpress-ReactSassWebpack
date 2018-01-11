import axios from 'axios';
import alt from '../alt/alt.js';

class DataActions {
  constructor(){
    const appUrl = 'http://localhost/wordpress/'; // Wordpress installation url
    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
    this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts?per_page=30`;
  }

  // Asynchronous = This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
  // A Promise is in one of these states:
  // pending: initial state, neither fulfilled nor rejected.
  // fulfilled: meaning that the operation completed successfully.
  // rejected: meaning that the operation failed.

  // Method for getting data from the provided end point url
  api(endPoint){
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  // Method for getting Pages data
  getPages(cb){
    this.api(this.pagesEndPoint).then((response) => {
      this.getPosts(response, cb);
    });
    return true;
  }

  // Method for getting Posts data
  getPosts(pages, cb){
    this.api(this.postsEndPoint).then((response) => {
      const posts = response;
      const pagesPosts = {pages, posts};
      this.getSuccess(pagesPosts); //Pass returned data to the store
      cb(pagesPosts); // callback will be used for dynamic rout building
    });
    return true;
  }

  // This returnes an object with Pages and Posts data together
  // The Alt Store will listen for this method to fire and will store the returned data
  getSuccess(pagesPosts){
    return pagesPosts;
  }

}

export default alt.createActions(DataActions);
