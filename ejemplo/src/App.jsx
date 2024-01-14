import './App.css';
import { PokemonsAxios } from './components/pokemons/PokemonsAxios';
import { PokemonsFetch } from './components/pokemons/PokemonsFetch';

function App() {
  return (
    <>
      <h1>fetch vs Axios</h1>
      <PokemonsFetch />
      <PokemonsAxios />
    </>
  );
}

export default App;
