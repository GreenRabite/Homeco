import React from 'react';
import FinishListItem from './finish_list_item';

class ContractorFinishTask extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchFinishSchedules(this.props.currentUser.category);
  }

  render(){
    let FinishListItems;
    if (this.props.schedules) {
      const schedules = Object.values(this.props.schedules);
      const sortSchedules = schedules.sort(function(a, b) {
        const c = new Date(a.workDate);
        const d = new Date(b.workDate);
        return c-d;
      });
      if(schedules.length > 0){
        debugger;
        FinishListItems = sortSchedules.map((schedule)=>{
          return(
            <FinishListItem schedule={schedule} key={schedule._id} />
          );
        });
      }
    }
    return(
      <div className="contractor-task-container">
        <h1>Finished Tasks</h1>
        {FinishListItems}
      </div>
    );
  }
}

export default ContractorFinishTask;
