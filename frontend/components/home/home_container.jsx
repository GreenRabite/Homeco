import React from 'react';
import {connect} from 'react-redux';
import Home from './home';
import {propertyRequire} from '../../actions/property_actions';
import {clearPackage} from '../../actions/package_actions';
import {createSession} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  property: state.entities.property,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  propertyRequire: (address) => dispatch(propertyRequire(address)),
  clearPackage: () => dispatch(clearPackage()),
  createSession: (user) => dispatch(createSession(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
