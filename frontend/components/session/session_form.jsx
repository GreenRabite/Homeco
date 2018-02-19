import React from 'react';
import SessionImg from './session_img';

class SessionForm extends React.Component {
  constructor (){
    super();
    this.state = {
      'username': '',
      'email': '',
      'password': ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.path !== newProps.match.path) {
      this.props.clearErrors();
    }
  }

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleClick(e){
    e.preventDefault();
  }

  handleClose(){
    this.props.clearErrors();
  }

  render(){
    const text = this.props.formType == 'signup' ? 'Sign Up' : 'Log In';
    return (
      <div>
        <h1>{text}</h1>
      <div/>
    );
  }
}

export default SessionForm;
