import React from 'react';
import { IPokemonState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { buyPoke } from '../../actions/pokemon.actions';


interface IPokemonProps {
  pokemon: IPokemonState;
  buyPoke: () => void;
}

export class PokemonComponent extends React.Component<IPokemonProps, {}> {

  render() {
    return (
      <div>
          <img src={this.props.pokemon.img} alt="Whos that pokemon"/>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.id}</p>
          <button onClick={this.props.buyPoke}>Hello</button>
      </div>
    );
  }
}
// Connecting the the state index.js
const mapStateToProps = (state: IState) => {
  return {
    pokemon: state.pokemon
  }
}
//This is get a call to action to trigger new buyPoke
const mapDispatchToProps = {
  buyPoke: buyPoke
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonComponent);