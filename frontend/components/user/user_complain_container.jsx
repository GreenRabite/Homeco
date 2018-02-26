import {connect} from 'react-redux';
import UserComplain from './user_complain';
import {fetchUserSchedules} from '../../actions/schedule_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  schedules: state.entities.schedules

});

const mapDispatchToProps = (dispatch) => ({
  fetchUserSchedules: (userId, completed) => dispatch(fetchUserSchedules(userId, completed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComplain);
