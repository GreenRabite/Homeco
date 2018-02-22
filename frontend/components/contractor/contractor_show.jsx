import React from 'react';
import ContractorNavBar from './contractor_nav';

class ContractorShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserSchedules(this.props.currentUser.category);
  }

  render(){
    let ServiceListItems;
    // if(this.props.schedules){
    //   debugger;
    //   ServiceListItems = this.props.schedules.map((schedule)=>{
    //     return <li>{schedule._service}</li>;
    //     });
    // }
    return(
      <div className="contractor-container">
        <ContractorNavBar/>
        <div className="service-history-container">
          <ul>
            // {ServiceListItems}
          </ul>
        </div>
      </div>
    );
  }

}

export default ContractorShow;
