import React from 'react';
import { Counter } from './features/counter/Counter';
import Pokemon from './Pokemon';

const pokemons = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur'];

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      
      <h1>Pokemon</h1>
      <div>
        {pokemons.map((pokemon, index) => (
          <Pokemon key={index} name={pokemon} />
        ))}
      </div>
          </div>
  );
}

export default App;
