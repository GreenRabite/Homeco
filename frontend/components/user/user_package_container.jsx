import {connect} from 'react-redux';
import UserPackage from './user_package';
import {fetchUserPackage} from '../../actions/package_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  pac: state.entities.packages
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserPackage: (userId) => dispatch(fetchUserPackage(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPackage);
