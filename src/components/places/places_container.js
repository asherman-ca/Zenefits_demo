import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Places from './places';
import { requestLocations } from '../../actions/location_actions';

const mapStateToProps = state => ({
  locations: state.location
});

const mapDispatchToProps = dispatch => ({
  requestLocations: string => dispatch(requestLocations(string))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Places));
