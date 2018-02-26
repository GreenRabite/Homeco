import {connect} from 'react-redux';
import Payment from './user_payment';
import {fetchPayment} from '../../actions/payment_actions';
import {fetchUserPackage} from '../../actions/package_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  pac: state.entities.packages,
  payment: state.entities.payment
});

const mapDispatchToProps = (dispatch) => ({
  fetchPayment: (userId) => dispatch(fetchPayment(userId)),
  fetchUserPackage: (userId) => dispatch(fetchUserPackage(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
