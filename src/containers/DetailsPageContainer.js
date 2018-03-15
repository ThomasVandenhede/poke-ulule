import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchDetails } from '../asyncActionCreators';

import DetailsPage from '../components/DetailsPage';

const mapStateToProps = state => {
  return {
    data: state.pokemon.data,
    loading: state.pokemon.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDetails: name => {
      dispatch(fetchDetails(name));
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPage));