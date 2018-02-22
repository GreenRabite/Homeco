import {connect} from 'react-redux';
import {createSchedule} from '../../actions/schedule_actions';
import {clearErrors} from '../../actions/error_actions';
import User from './user';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  pac: state.entities.packages.pac,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createSchedule: (payload) => dispatch(createSchedule(payload)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
