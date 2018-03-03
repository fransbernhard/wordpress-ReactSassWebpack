import {Link} from 'react-router-dom';
import DataStore from '../flux/stores/DataStore.js';
import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
        active: false,
        ulActive: false
    };
  }

  addActiveClass() {
    const currentState = this.state.active;
    const currentUlState = this.state.ulActive;
    this.setState({
      active: !currentState,
      ulActive: !currentUlState
    });
  };

  render(){
    let allPages = DataStore.getAllPages();
    allPages = _.sortBy(allPages, [ function(page){
      page.menu_order; // Sort pages by order
    }])
    allPages.splice(allPages[1], 1); // Remove Search page

    return(
      <nav>
        <div
            className={this.state.active ? 'container-menu change': 'container-menu'}
            onClick={this.addActiveClass}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul
          className={this.state.ulActive ? 'ulActive': null}
        >
          <li onClick={this.addActiveClass}><Link to="/">Home</Link></li>
          {allPages.map((page) => {
            if(page.slug != 'home'){
              return(
                <li onClick={this.addActiveClass} key={page.id}>
                  <Link to={`/${page.slug}`} >
                    {page.title.rendered}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </nav>
    );
  }
}

export default Header;
