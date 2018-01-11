import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
    // this.new_map = this.new_map.bind(this);
    // this.add_marker = this.add_marker.bind(this);
  }

  // new_map( $el ) {
  // 	var $markers = $el.find('.marker');
  // 	var args = {
  // 		zoom		: 16,
  // 		center		: new google.maps.LatLng(0, 0),
  // 		mapTypeId	: google.maps.MapTypeId.ROADMAP
  // 	};
  // 	var map = new google.maps.Map( $el[0], args);
  //
  // 	map.markers = [];
  //
  // 	$markers.each(function(){
  //   	add_marker( $(this), map );
  // 	});
  //
  // 	center_map( map );
  // 	return map;
  // }
  //
  // add_marker( $marker, map ) {
  // 	var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
  //
  // 	var marker = new google.maps.Marker({ //add marker
  // 		position	: latlng,
  // 		map			: map
  // 	});
  //
  // 	map.markers.push( marker ); // add to array
  //
  //
  // 	if( $marker.html() ) { // if marker contains HTML, add it to an infoWindow
  // 		var infowindow = new google.maps.InfoWindow({ // create info window
  // 			content: $marker.html()
  // 		});
  //
  // 		google.maps.event.addListener(marker, 'click', function() { // show info window when marker is clicked
  // 			infowindow.open( map, marker );
  // 		});
  // 	}
  // }
  //
  // componentDidMount(){
  //   new_map(this);
  // }

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
            <p>
              {acf.name}</p>
              <a href="mailto:{acf.email}">{acf.email}</a>
              <p>{acf.phone}<br/>
              {acf.adress}<br/>
              {acf.zip_code}, {acf.city}<br/>
            </p>
          </div>
          <div className="contact-map">
            <p>{acf.contact_map.address}</p>
            <p>{acf.contact_map.lng}</p>
            <p>{acf.contact_map.lat}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

// <div className="marker">*</div>
// {this.new_map()}
