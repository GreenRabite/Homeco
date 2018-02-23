import { connect } from 'react-redux';
import ContractorForm from './contractor_form';
import { updateSchedule } from './../../actions/schedule_actions';

const mapStateToProps = (state,ownProps) => {
  debugger;
  return {
    currentUser: state.session.currentUser,
    schedule: ownProps.schedule
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSchedule: (schedule)=> dispatch(updateSchedule)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ContractorForm);
