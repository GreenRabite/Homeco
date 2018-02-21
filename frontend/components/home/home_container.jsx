import React from 'react';
import {connect} from 'react-redux';
import Home from './home';
import {propertyRequire} from '../../actions/property_actions';

const mapStateToProps = (state) => ({
  property: state.entities.property
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  propertyRequire: (address) => dispatch(propertyRequire(address))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
