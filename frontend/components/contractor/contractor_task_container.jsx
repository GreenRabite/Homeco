import { connect } from 'react-redux';
import ContractorTask from './contractor_task';
import { fetchContractorSchedules } from './../../actions/schedule_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    schedules: state.entities.schedules
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContractorSchedules: (category) => dispatch(fetchContractorSchedules(category)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ContractorTask);
