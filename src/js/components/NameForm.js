import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';

class NameForm extends Component {

  componentWillMount() {
    const { cookies } = this.props;
    this.setState({
      name: cookies.get('name') || 'Stranger'
    })
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange = (name) => {
    console.log(name.target.value)
    this.setState({name: name.target.value});
  }

  handleSubmit = () => {
    // e.preventDefault();
    const { cookies } = this.props;
    cookies.set('name', this.state.name, { path: '/' });
    console.log("COOKIES NAME: " + cookies.get('name'));
  }

  render() {
    const { name } = this.state;

    return (
      <form className="name-form" onSubmit={this.handleSubmit}>
        <input id="nameID" type="text" name="name" onChange={this.handleNameChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default withCookies(NameForm);
