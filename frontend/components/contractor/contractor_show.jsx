import React from 'react';
import ContractorNavBar from './contractor_nav';
import ContractorFinishTaskContainer from './contractor_finish_task_container';
import ServiceListItem from './service_list_item';

class ContractorShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listName: 'My Tasks'};
  }

  componentDidMount(){
    this.props.fetchContractorSchedules(this.props.currentUser.category);
  }

  componentWillReceiveProps(newProps){
    // this.props.fetchContractorSchedules(this.props.currentUser.category);
  }

  handleClick(listName){
    this.setState({listName: listName});
  }

  handleLogout(){
    this.props.logout().then(this.props.history.push('/'));
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
        <div className="contractor-container">
          <nav>
            <ul className="contractor-panel">
              <li className={this.state.listName == 'My Tasks' ? 'clicked' : ''} onClick={()=>this.handleClick('My Tasks')}>My Tasks</li>
              <li className={this.state.listName == 'Schedule' ? 'clicked' : ''} onClick={()=>this.handleClick('Schedule')}>Schedule</li>
              <li className={this.state.listName == 'Finished Tasks' ? 'clicked' : ''} onClick={()=>this.handleClick('Finished Tasks')}>Finished Tasks</li>
              <li className={this.state.listName == 'Payment' ? 'clicked' : ''} onClick={()=>this.handleClick('Payment')}>Payment</li>
              <li onClick={()=>this.handleLogout()}>Log Out</li>
            </ul>
          </nav>
          {this.state.listName === 'My Tasks' ? <div className="contractor-task-container">
            <h1>My Tasks</h1>
            {ServiceListItems}
          </div> : ""}
          {this.state.listName === 'Finished Tasks' ? <ContractorFinishTaskContainer /> : ""}
        </div>

      </div>
    );
  }

}

export default ContractorShow;
