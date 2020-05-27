import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.requestAllPokemon();
    }

    render () {
        const pokemonLi = this.props.pokemon.map((poke) => {
            return <li key={poke.id}>
                {poke.name}
                <img src={poke.image_url} />
            </li>

        })
        return (
            <>
                <ul>
                    {pokemonLi}
                </ul>
            </>
        )
    }
}

export default PokemonIndex;