import React, { Component } from 'react';
import InstaPost from './InstaPost';

class Instagram extends Component {
  constructor(){
    super();
    this.state = {
      instaPosts: []
    }
  }

  componentDidMount(){
    const myInit = {
      method: "GET",
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        // 'Content-Type': 'application/json', // send json
        'Accept': 'application/json' // recieve json
      }
    };

    

    fetch('https://api.instagram.com/v1/users/' + userId + '/media/recent/?access_token=' + token + '&count=' + count, myInit)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ instaPosts: data.data })

        console.log("STATE: " + this.state.instaPosts)
        this.state.instaPosts.map((po, i) => {
          console.log("EVERY POST: " + po.id + ". ID: " + i)
        })
      })
      .catch(function(err) {
        console.log('Error cannot get instafeed: ' + err.message);
      })
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <InstaPost instaPosts={this.state.instaPosts} />
        </div>
      </div>
    )
  }
}


export default Instagram;
