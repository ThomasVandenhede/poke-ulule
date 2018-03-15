import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPokemon } from '../asyncActionCreators';

import ListPage from '../components/ListPage';

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemonList.items,
    loading: state.pokemonList.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: () => {
      dispatch(fetchPokemon());
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPage));