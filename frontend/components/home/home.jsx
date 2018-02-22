import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {'address': '', 'zipcode': ''};
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.propertyRequire(this.state).then(this.props.history.push('/packages'));
  }

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value});
    }
  }

  render(){
    return (
      <div>
        <div className='home-background'>
          <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1519239149/hero_qxaymn.jpg' />
        </div>
        <div className='home'>
          <h1>Homeco</h1>
          <form className='home-page-address' onSubmit={(e)=>this.handleSubmit(e)}>
            <div className='home-page-address-input'>
              <input type='text' onChange={this.handleInput('address')} value={this.state.address} placeholder='Please input your homeadress to get quote'/>
              <input className='zipcode' type='text' onChange={this.handleInput('zipcode')} value={this.state.zipcode} placeholder='zipcode'/>
            </div>
            <input type='submit' onClick={(e)=>this.handleSubmit(e)}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;
