import React from 'react';

class UserComplain extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  userId(){
    const userIdArr = this.props.currentUser._id.split(':');
    let userId;
    if (userIdArr.length > 1) {
      userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
    } else {
      userId = this.props.currentUser._id;
    }
    return userId;
  }

  componentDidMount(){
    const userId = this.userId;
    
  }

  render(){
    return(
    <div className='user-payment'>
      <h1>Complain</h1>

    </div>
    )
  }

}

export default UserComplain;
