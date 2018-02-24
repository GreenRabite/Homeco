import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (){
    super();
    this.state = {
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
    if (this.props.formType == 'signup') {
      this.props.createUser(this.state)
        .then(()=>this.props.history.push('/user'));
    } else {
      this.props.createSession(this.state)
        .then(()=>this.props.history.push('/user'));
    }
  }

  handleGoogleUser(e){
    e.preventDefault();
    this.props.googleUser().then(()=>{console.log('loged in as google');});
  }

  handleClose(){
    this.props.clearErrors();
  }

  render(){
    const text = this.props.formType == 'signup' ? 'Sign Up' : 'Log In';
    return (
      <div className='session-form'>
        <h1>{text} Homeco</h1>
        {this.props.errors.length ? (
          <div className='session-error'>
            <p>{this.props.errors[0]}</p>
            <div onClick={()=>this.handleClose()} className='errors-closeBtn'>&times;</div>
          </div>
        ) : (
          ""
        )}
        <form>
          <input id='email' onChange={this.handleInput('email')} type='text' value={this.state.email} placeholder='Email Address'/>
          <input id='passowrd' onChange={this.handleInput('password')} type='password' value={this.state.password} placeholder='Password'/>
          <input type='submit' onClick={(e)=>this.handleClick(e)}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;

// <button onClick={(e)=>this.handleGoogleUser(e)}>{text} With Google Account</button>
// {this.props.formType == 'signup' ?
// <Link to='/login'>Log In</Link>
// :
// <Link to='/signup'>Sign Up</Link>
// }
