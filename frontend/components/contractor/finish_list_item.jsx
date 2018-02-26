import React from 'react';
import { Link } from 'react-router-dom';

class FinishListItem extends React.Component{
  constructor(props){
    super(props);
  }

  formatDate(oldDate) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    // debugger;
    let date = new Date(oldDate);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
  }

  getDayOfWeek(oldDate) {
    let dayOfWeek = new Date(oldDate).getDay();
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  render(){
    return(
        <div className="contractor-schedule-information" key={this.props.schedule._id}>
          <div className="finish-task service-list-modal">
            <div className="">
              <div><b>{this.getDayOfWeek(this.props.schedule.workDate)}</b></div>
              <div>{this.props.schedule._service.serviceType}</div>
              <div>{this.formatDate(this.props.schedule.workDate)}</div>
              <div className="city">{`${this.props.schedule._package._property.city}, ${this.props.schedule._package._property.state}`}</div>
              <br/>
            </div>
            <img className="icon-container2" src="http://res.cloudinary.com/greenrabite/image/upload/v1519633901/checkmark.svg"></img>
          </div>
      </div>
    );
  }
}

export default FinishListItem;
