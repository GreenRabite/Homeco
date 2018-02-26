import {connect} from 'react-redux';
import UserComplain from './user_complain';
import {fetchUserSchedules} from '../../actions/schedule_actions';
import {fetchComplains, createComplain} from '../../actions/complain_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  schedules: state.entities.schedules,
  complains: state.entities.complains
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserSchedules: (userId, completed) => dispatch(fetchUserSchedules(userId, completed)),
  fetchComplains: (userId) => dispatch(fetchComplains(userId)),
  createComplain: (complain) => dispatch(createComplain(complain))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComplain);
