import { connect } from 'react-redux';
import CalendarShow from './calendar_show.jsx';
import { allScheduleDates } from '../../reducers/selectors';

const mapStateToPros = state => ({
  allSchedules: allScheduleDates(state.entities),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(CalendarShow);
