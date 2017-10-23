import { connect } from 'react-redux';
import Places from './places';
import { requestLocations } from '../../actions/location_actions';

const mapDispatchToProps = dispatch => ({
  requestLocations: (string) => dispatch(requestLocations(string))
});

export default connect(mapDispatchToProps)(Places);
