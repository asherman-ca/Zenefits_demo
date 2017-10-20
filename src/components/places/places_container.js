import { connect } from 'react-redux';
import Places from './places';
import { requestLocations } from '../../actions/location_actions';

const mapStateToProps = state => {
  locations: state.locations;
};

const mapDispatchToProps = dispatch => ({
  requestLocations: (string) => dispatch(requestLocations(string))
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
