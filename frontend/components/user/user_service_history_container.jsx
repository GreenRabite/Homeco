import {connect} from 'react-redux';
import ServiceHistory from './user_service_history';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceHistory);
