import React from 'react';
import UserHomeContainer from './user_home_container';
import UpcomingService from '../schedule/upcoming_services';
import PaymentContainer from './user_payment_container';
import UserServiceHistoryContainer from './user_service_history_container';
import UserComplainContainer from './user_complain_container';
import UserPackageContainer from './user_package_container';

class User extends React.Component{
  constructor(){
    super();
    this.state = {listName: 'UpcomingService'};
  }

  componentDidMount(){
    // if (this.props.pac && this.props.currentUser) {
    //   this.props.createSchedule({
    //     pac: this.props.pac,
    //     user: this.props.currentUser
    //   })
    // }
  }

  componentWillUpdate(nextProps, nextState){
    // if (this.props.pac && Object.values(nextProps.schedules).length >= 1) {
    //   window.location.reload();
    // }
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
            <li className={this.state.listName == 'Package' ? 'clicked' : ''} onClick={()=>this.handleClick('Package')}>My Package</li>
            <li className={this.state.listName == 'Payment' ? 'clicked' : ''} onClick={()=>this.handleClick('Payment')}>Payment</li>
            <li className={this.state.listName == 'ServiceHistory' ? 'clicked' : ''} onClick={()=>this.handleClick('ServiceHistory')}>Service History</li>
            <li className={this.state.listName == 'Complain' ? 'clicked' : ''} onClick={()=>this.handleClick('Complain')}>Complain</li>
            <li onClick={()=>this.handleLogout()}>Log Out</li>
          </ul>
        </div>
        { this.state.listName == 'UserHomeContainer' ? <UserHomeContainer /> : ""}
        { this.state.listName == 'UpcomingService' ? <UpcomingService /> : ""}
        { this.state.listName == 'Payment' ? <PaymentContainer /> : ""}
        { this.state.listName == 'ServiceHistory' ? <UserServiceHistoryContainer /> : ""}
        { this.state.listName == 'Complain' ? <UserComplainContainer /> : ""}
        { this.state.listName == 'Package' ? <UserPackageContainer /> : ""}
      </div>
    )
  }
}

export default User;
