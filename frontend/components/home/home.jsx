import React from 'react';
import HomeCenter from './home-center';
import Footer from './footer';
import { Link } from 'react-router-dom';
import {async} from 'async';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'address': '',
      'zipcode': '',
      'addressclassName': 'hidden',
      'zipcodeclassName': 'hidden'
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.props.clearPackage()
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.address) {
      this.setState({'addressclassName': ''})
    } else if (this.state.zipcode.length !== 5) {
      this.setState({'zipcodeclassName': ''})
    } else {
      this.props.propertyRequire(this.state).then(this.props.history.push('/packages'));
    }
  }

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value});
      this.setState({'zipcodeclassName': 'hidden', 'addressclassName': 'hidden'})
    }
  }

  demoLogin(e, type){
    if (type === 'user') {
      const address = '26038 SE 23rd Place';
      const zipcode = '98075';
      setTimeout(()=> {
        this.setState({address: address})
        setTimeout(() => {
          this.setState({zipcode: zipcode})
          setTimeout(()=>{
            $('#submit-address-btn').css({
              'font-weight': 'bold',
              'background-color': '#0899af',
              'border': '1px solid #0899af',
            })
            setTimeout(()=>{
              this.handleSubmit(e);
              setTimeout(()=>{
                $('#demo-select-package').css({
                  'background-color': 'lightgray',
                })
                setTimeout(()=>{
                  this.props.history.push('/signup');
                  setTimeout(()=>{
                    $('#email').val('demo_user@homeco.club')
                    setTimeout(()=>{
                      $('#password').val('password')
                      setTimeout(()=>{
                        $('#demo-login-signup').css({
                          'background-color': 'gray',
                          'font-weight': 'bold',
                          'color': 'white',
                        });
                        setTimeout(()=>{
                          this.props.createSession({email: 'demo_user@homeco.club', password: 'password'})
                            .then(()=>this.props.history.push('/user'))
                        }, 1000)
                      },1000)
                    },1000)
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    } else {
      this.props.history.push('/login');
      setTimeout(()=>{
        $('#email').val('contractor_demo@homeco.club')
        setTimeout(()=>{
          $('#password').val('password')
          setTimeout(()=>{
            $('#demo-login-signup').css({
              'background-color': 'gray',
              'font-weight': 'bold',
              'color': 'white',
            });
            setTimeout(()=>{
              this.props.createSession({email: 'contractor_demo@homeco.club', password: 'password'})
                .then(()=>this.props.history.push('/contractor/main'))
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }
  }

  render(){
    return (
      <div className='home-header'>
        <div className='home-nav'>
          <h1><i className="fas fa-home"></i>Homeco</h1>
          {this.props.currentUser ?
            <Link to='/user'><h2>My Home</h2></Link>
             :
            <div className='home-header-login'>
              <p>Already our customer?</p>
              <Link to='/login'><h3>Log In</h3></Link>
              <div onClick={(e)=>this.demoLogin(e, 'user')}>
                <h3>Demo_User</h3>
              </div>
              <div onClick={(e)=>this.demoLogin(e, 'contructor')}>
                <h3>Demo_Contructor</h3>
              </div>
            </div>
          }
        </div>
        <div className='home-background'>
        </div>
        <div className='home'>
          <h1>All-In-One Home Services. Simplified.</h1>
          <p>Homeco is the trusted partner for your home</p>
          <form className='home-page-address' onSubmit={(e)=>this.handleSubmit(e)}>
            <div className={`hint ${this.state.addressclassName}`}>Please input address</div>
            <div className={`hint ${this.state.zipcodeclassName}`}>Please input valid zipcode</div>
            <div className='home-page-address-input'>
              <input id='home-address' type='text' onChange={this.handleInput('address')} value={this.state.address} placeholder='Please input your home address to get packages quote'/>
              <input id='home-zipcode' className='zipcode' type='text' onChange={this.handleInput('zipcode')} value={this.state.zipcode} placeholder='zipcode'/>
            </div>
            <input id='submit-address-btn' type='submit' onClick={(e)=>this.handleSubmit(e)} value='GO'/>
          </form>
        </div>
        <HomeCenter />
        <Footer />
      </div>
    )
  }
}

export default Home;
