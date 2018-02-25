import { connect } from 'react-redux';
import ContractorForm from './contractor_form';
import { updateWorkSchedule, fetchContractorSchedules } from './../../actions/schedule_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    schedule: ownProps.schedule
  };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    updateWorkSchedule: (schedule)=> dispatch(updateWorkSchedule(schedule)),
    fetchContractorSchedules: (category) => dispatch(fetchContractorSchedules(category))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(ContractorForm);
