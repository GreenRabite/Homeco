import { connect } from 'react-redux';
import ContractorFinishTask from './contractor_finish_task';
import { fetchFinishSchedules } from './../../actions/schedule_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    schedules: state.entities.schedules
  };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    fetchFinishSchedules: (category)=> dispatch(fetchFinishSchedules(category))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(ContractorFinishTask);
