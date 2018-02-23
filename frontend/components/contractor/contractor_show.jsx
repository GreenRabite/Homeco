import React from 'react';
import ContractorNavBar from './contractor_nav';

class ContractorShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {schedules: [], services: []};
  }

  componentDidMount(){
    this.props.fetchContractorSchedules(this.props.currentUser.category);
  }

  // componentWillReceiveProps(newProps){
    // if (this.state.schedules.length !== newProps.schedules.length) {
    //   this.setState({schedules: newProps.schedules},
    //     ()=>newProps.schedules.map((schedule)=>{
    //       return this.props.fetchService(schedule._service);
    //     })
    //   );
    // }
    // if (this.state.services.length !== newProps.services.length) {
    //   this.setState({services: newProps.services});
    // }
  // }

  render(){
    let ServiceListItems;
    const schedules = Object.values(this.props.schedules);
    debugger;
    if(schedules.length > 0){
      ServiceListItems = schedules.map((schedule)=>{
        return <li key={schedule._id}>{schedule._service.serviceType}</li>;
        });
    }
    return(
      <div className="contractor-container">
        <ContractorNavBar/>
        <div className="service-history-container">
          <ul>
            {ServiceListItems}
          </ul>
        </div>
      </div>
    );
  }

}

export default ContractorShow;
