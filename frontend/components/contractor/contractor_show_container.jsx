import { connect } from 'react-redux';
import ContractorShow from './contractor_show';
import { fetchContractorSchedules } from './../../actions/schedule_actions';
import { fetchService } from './../../actions/service_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    schedules: state.entities.schedules,
    services: state.entities.services
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContractorSchedules: (category) => dispatch(fetchContractorSchedules(category)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ContractorShow);
