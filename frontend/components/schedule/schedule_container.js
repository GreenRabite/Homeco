import { connect } from 'react-redux';
import { receiveSchedule } from '../../actions/schedule_actions'
import ScheduleIndex from './schedule_index';


const mapStateToPros = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  return({
    receiveSchedule: () => dispatch()
  });
};


export defult connect(
  mapStateToPros,
  mapDispatchToProps
)(ScheduleIndex);
