import DataStore from '../../flux/stores/DataStore.js'
import React, { Component } from 'react';
import instagram from '../../../img/instagram.png';
import linkedin from '../../../img/linkedin.png';
import github from '../../../img/git.png';
import stack from '../../../img/stack.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <a href="https://www.google.se/" target="_blank"><img src={instagram} className="social-img"/></a>
          <a href="https://www.linkedin.com/in/mimi-lundberg/" target="_blank"><img src={linkedin} className="social-img"/></a>
          <a href="https://github.com/fransbernhard" target="_blank"><img src={github} className="social-img"/></a>
          <a href="https://stackoverflow.com/users/7655988/fransbernhard" target="_blank"><img src={stack} className="social-img"/></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
