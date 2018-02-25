import React from 'react';

class UserHome extends React.Component {
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
    this.props.fetchProperty(userId);
  }

  render(){
    const {property} = this.props;
    return(
    <div className='user-my-home'>
      <h1>My Home</h1>
      {property.zipcode ?
        <div className='property-information'>
          <table>
            <tbody>
              <tr><th>Address</th><td>{property.street}</td></tr>
              <tr><th>City</th><td>{property.city}</td></tr>
              <tr><th>State</th><td>{property.state}</td></tr>
              <tr><th>Zipcode</th><td>{property.zipcode}</td></tr>
              <tr><th>Property Type</th><td>{property.useCode}</td></tr>
              <tr><th>Built</th><td>{property.yearBuilt}</td></tr>
              <tr><th>Lot Size</th><td>{property.lotSizeSqFt}</td></tr>
            </tbody>
          </table>
        </div>
       : ""}
    </div>
    );
  }
}

export default UserHome;
