import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    let page = DataStore.getPageBySlug('contact');
    let acf = page.acf;

    const divStyle = {
      backgroundImage: 'url(' + acf.contact_bg + ')'
    }

    return (
      <div className="bg" style={divStyle}>
        <h1>{page.title.rendered}</h1>
        <div className="contact-container">
          <div className="contact-filter">
            <img className="self-portrait" src={acf.self_portrait}/>
            <p>{acf.name}</p>
            <a href={acf.email}>{acf.email}</a>
            <p>{acf.phone}<br/>
            {acf.adress}<br/>
            {acf.zip_code}, {acf.city} </p>
          </div>
          <video width="320" height="240" autoPlay>
            <source src="http://localhost/wordpress/wp-content/uploads/2018/02/Desert-Watching.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    );
  }
}

export default Contact;
