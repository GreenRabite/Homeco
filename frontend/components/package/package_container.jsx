import React from 'react';
import {connect} from 'react-redux';
import Package from './package';
import {createPackage} from '../../actions/package_actions';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  property: state.entities.property,
  packages: state.entities.packages,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createPackage: (payload) => dispatch(createPackage(payload)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Package);
