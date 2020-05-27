import { Provider } from 'react-redux';
import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const Root = ({ store }) => (
    <Provider store={store}>
      <PokemonIndexContainer />
    </Provider>
);

export default Root;