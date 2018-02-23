import { connect } from 'react-redux';
import ContractorShow from './contractor_show';
import { fetchContractorSchedules } from './../../actions/schedule_actions';
import { fetchService } from './../../actions/service_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    schedules: state.entities.schedules,
    services: state.entities.services
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContractorSchedules: (category) => dispatch(fetchContractorSchedules(category))
    // fetchService: (id) => dispatch(fetchService(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ContractorShow);
