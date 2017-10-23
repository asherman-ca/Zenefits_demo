import { connect } from 'react-redux';
import Places from './places';

const mapStateToProps = state => ({
  locations: state.location
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
