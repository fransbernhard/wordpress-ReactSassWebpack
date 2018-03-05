import alt from '../alt/alt.js';
import DataActions from '../actions/DataActions.js';

class DataStore {
  constructor(){
    this.data = {}

    // Listen to the getSuccess() in DataActions.js
    this.bindListeners({
      handleSuccess: DataActions.GET_SUCCESS
    })

    this.exportPublicMethods({
      getAll: this.getAll,
      getAllPages: this.getAllPages,
      getAllPosts: this.getAllPosts,
      getPageBySlug: this.getPageBySlug,
      getPostBySlug: this.getPostBySlug
    })
  }

  // Store data returned by DataActions.getSuccess()
  handleSuccess(data){
    this.setState({ data });
  }

  getAll(){
    return this.getState().data.pages;
  }

  // Return all Pages
  getAllPages() {
    return this.getState().data.pages;
  }

  // Return all Posts
  getAllPosts() {
    return this.getState().data.posts;
  }

  // Return page by slug
  getPageBySlug(slug){
    const pages = this.getState().data.pages;
    return pages[Object.keys(pages).find((page, i) => {
      return pages[page].slug === slug;
    })] || {};
  }

  // Return post by slug
  getPostBySlug(slug){
    const posts = this.getState().data.posts;
    return posts[Object.keys(posts).find((post, i) => {
      return posts[post].slug === slug;
    })] || {};
  }
}

export default alt.createStore(DataStore, 'DataStore');
