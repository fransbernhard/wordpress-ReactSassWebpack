import {render} from 'react-dom';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import DataActions from './js/flux/actions/DataActions.js';
import './app.scss';

import Home from './js/components/Home.js';
import About from './js/components/About.js';
import Archive from './js/components/Archive.js';
import Header from './js/components/common/Header.js';
import Single from './js/components/Single.js';
import Footer from './js/components/common/Footer.js';
import Contact from './js/components/Contact.js';
import Instagram from './js/components/Instagram.js';

class App extends Component {

  templates = {
    'about': About,
    'contact': Contact,
    'archive': Archive,
    'single': Single
  }

  buildRoutes(data){
    return data.pages.map((page, i) => {
      return (
        <Route
          key={i}
          component={this.templates[page.slug]}
          path={`/${page.slug}`}
          exact
        />
      )
    })
  }

  buildPostRoutes(data){
    return data.posts.map((post,i) => {
      return (
        <Route
          key={i}
          component={this.templates.single}
          path={`/archive/${post.slug}`}
        />
      )
    })
  }

  run(){
    DataActions.getPages((response) => {
      render(
        <div>
          <CookiesProvider>
            <Router>
              <div>
                <Header />
                <Switch>
                  <Route path="/" component={Home} exact />
                  {this.buildRoutes(response)}
                  {this.buildPostRoutes(response)}
                  <Route component={Instagram} path="/instagram" />
                  <Route render={() => { return <Redirect to="/" />}} />
                </Switch>
                <Footer />
              </div>
            </Router>
          </CookiesProvider>
        </div>
        , document.getElementById('app')
      );
    });
  }
}

new App().run();
