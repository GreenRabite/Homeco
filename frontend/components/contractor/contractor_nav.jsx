import React from 'react';
import { Link } from 'react-router-dom';

class ContractorNavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {listName: 'My Tasks'};
  }

  handleClick(listName){
    this.setState({listName: listName});
  }

  handleLogout(){
    this.props.logout().then(this.props.history.push('/'));
  }

  render(){
    return(
      <nav>
        <div className='user-avatar'>
          <a href='/#/'>
            <div className='user-avatar-container'>
              <img src='http://alan-topnotch.com/wp-content/uploads/2017/03/cropped-tools.png' />
            </div>
          </a>
        </div>
        <ul className="contractor-panel">
          <li className={this.state.listName == 'My Tasks' ? 'clicked' : ''} onClick={()=>this.handleClick('My Tasks')}>My Tasks</li>
          <li className={this.state.listName == 'Schedule' ? 'clicked' : ''} onClick={()=>this.handleClick('Schedule')}>Schedule</li>
          <li className={this.state.listName == 'Finished Tasks' ? 'clicked' : ''} onClick={()=>this.handleClick('Finished Tasks')}>Finished Tasks</li>
          <li className={this.state.listName == 'Payment' ? 'clicked' : ''} onClick={()=>this.handleClick('Payment')}>Payment</li>
          <li onClick={()=>this.handleLogout()}>Log Out</li>
        </ul>
      </nav>
    );
  }
}

export default ContractorNavBar;
