import { connect } from 'react-redux';
import ContractorShow from './contractor_show';

const mapStateToProps = (state,ownProps) => {
  return {
    // services: state.entities.services
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ContractorShow);
