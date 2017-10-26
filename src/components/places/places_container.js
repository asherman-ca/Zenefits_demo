import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Places from './places';

const mapStateToProps = state => ({
  locations: state.location
});

const mapDispatchToProps = () => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Places));
