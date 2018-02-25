import React from 'react';
import ContractorNavBar from './contractor_nav';
import ServiceListItem from './service_list_item';

class ContractorShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchContractorSchedules(this.props.currentUser.category);
  }

  render(){
    let ServiceListItems;
    const schedules = Object.values(this.props.schedules);
    const sortSchedules = schedules.sort(function(a, b) {
       const c = new Date(a.workDate);
       const d = new Date(b.workDate);
       return c-d;
     });
    if(schedules.length > 0){
      ServiceListItems = sortSchedules.map((schedule)=>{
        return(
          <ServiceListItem schedule={schedule} key={schedule._id} />
        );
      });
    }
    return(
      <div className="contractor-container">
        <ContractorNavBar/>
        <div className="">
            {ServiceListItems}
        </div>
      </div>
    );
  }

}

export default ContractorShow;
