import {connect} from 'react-redux';
import UserComplain from './user_complain';


const mapStateToProps = (state) => ({
  schedules: state.entities.schedules,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComplain);
