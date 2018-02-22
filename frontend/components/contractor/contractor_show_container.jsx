import { connect } from 'react-redux';
import ContractorShow from './contractor_show';
import { fetchUserSchedules } from './../../actions/schedule_actions';
import { fetchService } from './../../actions/service_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    schedules: state.entities.schedules
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSchedules: (userId) => dispatch(fetchUserSchedules(userId)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ContractorShow);
