import {connect} from 'react-redux';
import UserHome from './user_home';
import {fetchProperty} from '../../actions/property_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  property: state.entities.property,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchProperty: (userId) => dispatch(fetchProperty(userId))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
