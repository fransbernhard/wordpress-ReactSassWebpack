import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';

class About extends Component {
  render() {
    let page = DataStore.getPageBySlug('about');
    let acf = page.acf;
    const divStyle = {
      backgroundImage: 'url(' + acf.about_image + ')'
    }

    return (
      <div className="container bg" style={divStyle}>
        <div className="wrapper">
          <div className="about">
            <h1>{acf.about_title}</h1>
            <p className="about-p">{acf.about_text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
