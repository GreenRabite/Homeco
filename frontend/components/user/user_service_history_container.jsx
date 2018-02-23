import {connect} from 'react-redux';
import ServiceHistory from './user_service_history';
import {fetchUserSchedules} from '../../actions/schedule_actions';


const mapStateToProps = (state) => ({
  schedules: state.entities.schedules,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserSchedules: (userId, completed) => dispatch(fetchUserSchedules(userId, completed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceHistory);
