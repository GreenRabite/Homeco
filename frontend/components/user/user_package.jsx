import React from 'react';

class UserPackage extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    const userIdArr = this.props.currentUser._id.split(':')
    let userId;
    if (userIdArr.length > 1) {
      userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
    } else {
      userId = this.props.currentUser._id;
    }
    if (!this.props.pac._id) {
      this.props.fetchUserPackage(userId);
    }
  }

  render(){
    const {pac} = this.props;
    return(
    <div className='user-package'>
      <h1>My Package</h1>
      <div className='user-package-detail'>
        <p>Price: <strong>{pac.price}</strong> / month</p>
        {pac._service ?
          <ul className='user-package-service-list'>Services:
            {Object.values(pac._service).map((service, idx)=><li key={idx}>{service.serviceType}</li>)}
          </ul>
        : ""}
      </div>
    </div>
    )
  }

}

export default UserPackage;
