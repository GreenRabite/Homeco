import { connect } from 'react-redux';
import ContractorForm from './contractor_form';
import { updateWorkSchedule } from './../../actions/schedule_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    schedule: ownProps.schedule
  };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    updateWorkSchedule: (schedule)=> dispatch(updateWorkSchedule(schedule))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(ContractorForm);
