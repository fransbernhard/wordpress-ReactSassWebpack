import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Slider from './Slider';

configureAnchors({scrollDuration: 1000}); // Offset all anchors by -60 to account for a fixed header and scroll more quickly than the default 400ms

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: null
    }
  }

  componentDidMount(){
    this.tick();

    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

  tick() {
    let hm = new Date();
    var h = hm.getHours();
    var m = hm.getMinutes();
    var s = hm.getSeconds();
    this.setState({
      time: h + ":" + m + ":" + s
    });
  }

  render(){
    let pageData = DataStore.getPageBySlug('home');
    let acf = pageData.acf; // Advanced Custom Fields data

    const divStyle = {
      backgroundImage: 'url(' + acf.home_header_img + ')'
    }
    const data = acf.gallery;

    return (
      <div>
        <div className="bg" style={divStyle}>
          <h1 className="time-title">{this.state.time}</h1>
          <div className="home-content">
            <h1>{acf.home_header_text}</h1>
            <p>{acf.home_header_desc}</p>
            <a className="readMoreLink" href='#section1'>Read more</a>
          </div>
          <a href='#section1' className="goDown"><img className="goDownImg" src={acf.home_down_arrow}/></a>
        </div>
        <ScrollableAnchor id={'section1'}>
          <div className="second-section" style={{backgroundImage: `url(${acf.home_second_section_img})`}}>
            <Slider gallery={data}/>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Home;

// let loc = '-36.848461, 174.763336';
// let targetDate = new Date();
// let timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
// let apiKey = 'AIzaSyD3mH6hZFI8QXnm6wvPrgfYl3CLraHbjS4';
// let apiCall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + loc + '&timestamp=' + timestamp + '&key=' + apiKey;
//
// fetch(apiCall)
//   .then(res => {
//     return res.json();
//   }).then(data => {
//     var offsets = data.dstOffset * 1000 + data.rawOffset * 1000;
//     var localdate = new Date(timestamp * 1000 + offsets);
//
//     this.setState({
//       time: data.timeZoneId + ", " + localdate.toLocaleString()
//     });
//     console.log("state: " + this.state.time)
//   })
