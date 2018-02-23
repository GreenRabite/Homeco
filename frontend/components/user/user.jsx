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
            <li className={this.state.listName == 'UpcomingService' ? 'clicked' : ''} onClick={()=>this.handleClick('UpcomingService')}>Upcoming Service</li>
            <li className={this.state.listName == 'UserHomeContainer' ? 'clicked' : ''} onClick={()=>this.handleClick('UserHomeContainer')}>My Home</li>
            <li className={this.state.listName == 'ServiceHistory' ? 'clicked' : ''} onClick={()=>this.handleClick('ServiceHistory')}>Service History</li>
            <li className={this.state.listName == 'Complain' ? 'clicked' : ''} onClick={()=>this.handleClick('Complain')}>Complain</li>
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
