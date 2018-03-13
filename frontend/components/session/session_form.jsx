import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormImg from './session_form_img';
import Footer from '../home/footer';


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
      if (this.props.errors.length) {
        this.props.clearErrors();
      }
    };
  }

  handleClick(e){
    e.preventDefault();
    if (this.props.pac && this.props.formType == 'signup') {
      this.props.bundleUser({
        pac: this.props.pac,
        user: this.state
      }).then(()=>this.props.history.push('/user'));
    } else if (this.props.formType == 'signup') {
      this.props.createUser(this.state)
        .then((errors, user)=>{
          if (user) {
            this.props.history.push('/user')
          }
        });
    } else {
      this.props.createSession(this.state)
        .then((errors, user)=>{
          if (user) {
            this.props.history.push('/user')
          }
        });
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
      <div>
        <div className='home-nav session-form-header'>
          <a href='/#/'><h1><i className="fas fa-home"></i></h1></a>
        </div>
        <div className='session-form-center'>
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
            <form onSubmit={(e)=>this.handleClick(e)}>
              <p>By Log In, you agree to Homeco's <a>Terms of Service</a> and <a>Privacy Policy</a>.</p>
              <input id='email' onChange={this.handleInput('email')} type='text' value={this.state.email} placeholder='Email Address'/>
              <input id='password' onChange={this.handleInput('password')} type='password' value={this.state.password} placeholder='Password'/>
              <input id='demo-login-signup' type='submit' value={text} onClick={(e)=>this.handleClick(e)}/>
            </form>
          </div>
          <SessionFormImg />
        </div>
        <Footer />
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
