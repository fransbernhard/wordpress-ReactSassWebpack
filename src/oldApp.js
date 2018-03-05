
import {render}             from 'react-dom';
import DataActions          from './js/flux/actions/DataActions.js';
import './app.scss';

import Home from './js/components/Home.js';
import About from './js/components/About.js';
import Archive from './js/components/Archive.js';
import Header from './js/components/Header.js';
import Footer from './js/components/Footer.js';
import Contact from './js/components/Contact.js';

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pages: []
    }
  }

  templates = {
    'about': About,
    'contact': Contact,
    'archive': Archive
  }

  // When Component has rendered, window.addEventListener adds event "load" and calls handleLoad function
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    this.run();
  }

  // Fade out site-loader
  handleLoad() {
    var fadeTarget = document.getElementById("loaderSmall");
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity < 0.1) {
          clearInterval(fadeEffect);
      } else {
          fadeTarget.style.opacity -= 0.1;
      }
    }, 1000);
  }

  buildRoutes(data){
    return data.pages.map((page, i) => {
      return(
        <Route
          key={i}
          component={this.templates[page.slug]}
          path={`/${page.slug}`}
          exact
        />
      )
    })
  }

  run(){
    DataActions.getPages((response) => {
      const routs = JSON.stringify(this.buildRoutes(response));
      // const resp = this.buildRoutes(response);
      console.log("routs: " + routs);
      this.setState({
        pages: routs
      })
    })
  }

  render(){
    return (
      <div>
        <div className="loaderSmall" id="loaderSmall">
          <div className="pixel-loader"></div>
        </div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              {this.state.pages}
              <Route render={() => {
                return <Redirect to="/" />
              }} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    )
  };
}

ReactDOM.render (
  <App/>,
  document.getElementById('app')
)

// <div className="loaderSmall" id="loaderSmall">
//   <div className="pixel-loader"></div>
// </div>

// constructor(props) {
//   super(props);
//   this.handleLoad = this.handleLoad.bind(this);
// }

// // When Component has rendered, window.addEventListener adds event "load" and calls handleLoad function
// componentDidMount() {
//   console.log("CONSOLED");
//   window.addEventListener('load', this.handleLoad)
// }
//
// // Fade out site-loader
// handleLoad() {
//   console.log("CALLED");
//   var fadeTarget = document.getElementById('loaderSmall');
//   var fadeEffect = setInterval(function () {
//     if (!fadeTarget.style.opacity) {
//         fadeTarget.style.opacity = 1;
//     }
//     if (fadeTarget.style.opacity < 0.1) {
//         clearInterval(fadeEffect);
//     } else {
//         fadeTarget.style.opacity -= 0.1;
//     }
//   }, 1000);
// }
