import { connect } from 'react-redux';
import Header from './header';
import { requestLocations } from '../../actions/location_actions';

const mapStateToProps = state => ({
  locations: state.location
});

const mapDispatchToProps = dispatch => ({
  requestLocations: string => dispatch(requestLocations(string))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
