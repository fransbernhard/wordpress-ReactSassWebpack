import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Slider from './Slider';

import { withCookies, Cookies } from 'react-cookie';
import NameForm from './NameForm';

configureAnchors({scrollDuration: 1000});

class Home extends Component {
  constructor(){
    super();
    this.state = {
      time: null,
      name: null
    }
  }

  componentWillMount() {
    const { cookies } = this.props;
    this.setState({
      name: cookies.get('name') || 'Stranger'
    })
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
    const d = new Date();
    const time = ("0" + d.getHours()).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ':' + ("0" + d.getSeconds()).slice(-2);
    const date = [("0" + d.getDate()).slice(-2),
      ("0" + (d.getMonth() + 1)).slice(-2),
      ("0" + d.getFullYear()).slice(-2)].join(' / ');

    this.setState({
      time: [date, time].join(' ')
    });
  }

  render(){
    let pageData = DataStore.getPageBySlug('home');
    let acf = pageData.acf; // Advanced Custom Fields data
    const divStyle = {backgroundImage: 'url(' + acf.home_header_img + ')'}
    const data = acf.gallery;

    const { name } = this.state;

    return (
      <div>
        <div className="bg" style={divStyle}>
          <h1 className="time-title">{this.state.time}</h1>
          <div className="home-content">
            <h1>{acf.home_header_text}</h1>
            <p>{acf.home_header_desc}</p>
            <a className="readMoreLink" href='#section1'>Read more</a>
          </div>

          <div className="cookies-form">
            <NameForm name={name}/>
            {this.state.name && <h1>Hello {this.state.name}!</h1>}
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

export default withCookies(Home);
