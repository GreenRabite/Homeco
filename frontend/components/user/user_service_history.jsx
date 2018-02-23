import React from 'react';

class ServiceHistory extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    if (this.props.currentUser) {
      const userIdArr = this.props.currentUser._id.split(':');
      let userId;
      if (userIdArr.length > 1) {
        userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
      } else {
        userId = this.props.currentUser._id;
      }
      this.props.fetchUserSchedules(userId, true);
    }
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.currentUser && nextProps.currentUser) {
      const userIdArr = nextProps.currentUser._id.split(':');
      let userId;
      if (userIdArr.length > 1) {
        userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
      } else {
        userId = nextProps.currentUser._id;
      }
      this.props.fetchUserSchedules(userId, true);
    }
  }

  render(){
    return(
    <div className='user-servicehistory'>
      <h1>Service History</h1>
    </div>
    )
  }

}

export default ServiceHistory;
