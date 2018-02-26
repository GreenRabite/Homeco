import React from 'react';
import ContractorFinishTaskContainer from './contractor_finish_task_container';
import ServiceListItem from './service_list_item';

class ContractorTask extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchContractorSchedules(this.props.currentUser.category);
  }

  render(){
    let ServiceListItems;
    if (this.props.schedules) {
      const schedules = Object.values(this.props.schedules);
      const sortSchedules = schedules.sort(function(a, b) {
        const c = new Date(a.workDate);
        const d = new Date(b.workDate);
        return c-d;
      });
      if(schedules.length > 0){
        ServiceListItems = sortSchedules.map((schedule)=>{
          return(
            <ServiceListItem schedule={schedule} key={schedule._id} fetchContractorSchedules={this.props.fetchContractorSchedules} />
          );
        });
      }
    }
    return(
      <div>
        <div className="contractor-task-container">
          <h1>My Tasks</h1>
          {ServiceListItems}
        </div>
      </div>
    );
  }

}

export default ContractorTask;
