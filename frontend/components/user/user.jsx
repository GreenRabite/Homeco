import React from 'react';
import UserHomeContainer from './user_home_container';
import UpcomingService from '../schedule/schedule_container';

class User extends React.Component{
  constructor(){
    super();
    this.state = {listName: 'UpcomingService'};
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

  handleClick(listName){
    this.setState({listName: listName});
  }

  handleLogout(){
    this.props.logout().then(this.props.history.push('/'));
  }

  render(){
    return (
      <div>
        <div className='user-pannel'>
          <ul>
            <li onClick={()=>this.handleClick('UpcomingService')}>Upcoming Service</li>
            <li onClick={()=>this.handleClick('UserHomeContainer')}>My Home</li>
            <li onClick={()=>this.handleClick('ServiceHistory')}>Service History</li>
            <li onClick={()=>this.handleClick('Complain')}>Complain</li>
            <li onClick={()=>this.handleLogout()}>Log Out</li>
          </ul>
        </div>
        { this.state.listName == 'UserHomeContainer' ? <UserHomeContainer /> : ""}
        { this.state.listName == 'UpcomingService' ? <UpcomingService /> : ""}
      </div>
    )
  }
}

export default User;
