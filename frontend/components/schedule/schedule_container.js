import { connect } from 'react-redux';
import ScheduleIndex from './schedule_index';
import {fetchUserSchedules, reschedule} from '../../actions/schedule_actions';

const mapStateToPros = (state) => ({
  schedules: state.entities.schedules,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserSchedules: (userId) => dispatch(fetchUserSchedules(userId)),
  reschedule: (id, workDate) => dispatch(reschedule(id, workDate))
});


export default connect(
  mapStateToPros,
  mapDispatchToProps
)(ScheduleIndex);
