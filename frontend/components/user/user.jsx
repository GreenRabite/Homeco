import React from 'react';

class User extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
    console.log('-========compoenntWillReceiveProps====');
    console.log(nextProps.currentUser);
    console.log(nextProps.pac);
    debugger
    if (nextProps.pac && nextProps.currentUser) {
      this.props.createSchedule({
        pac: nextProps.pac,
        user: nextProps.currentUser
      }).then(()=>{
        console.log('done with createSchedule ');
      })
    }
  }

  render(){
    return (
      <div>
        <h1>User Profile</h1>
      </div>
    )
  }
}

export default User;