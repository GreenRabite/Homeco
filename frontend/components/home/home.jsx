import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {'address': ''};
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.propertyRequire(this.state).then(()=>{console.log('*****send api call*****')});
  }

  handleInput(e){
    this.setState({'address': e.target.value});
  }

  render(){
    return (
      <div>
        <h1>Homeco</h1>
        <div className='home-page-background-container'>
          <img src=''/>
        </div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type='text' onChange={this.handleInput} value={this.state.address} placeholder='Please input your homeadress to get quote'/>
          <input type='submit' onClick={(e)=>this.handleSubmit(e)}/>
        </form>
      </div>
    )
  }
}

export default Home;
