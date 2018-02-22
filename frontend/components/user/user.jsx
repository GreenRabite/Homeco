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
    if (nextProps.pac && nextProps.currentUser) {
      this.props.createSchedule({
        pac: nextProps.pac,
        user: nextProps.currentUser
      })
    }
  }

  render(){
    return (
      <div>
        <div className='user-pannel'>
          <ul>
            <li>Schedule</li>
            <li>My Home</li>
            <li>Service History</li>
            <li>Complain</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default User;
