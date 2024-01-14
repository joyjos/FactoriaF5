import './Pokemon.css';
import { useState, useEffect } from 'react';

export const PokemonsFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Pokemons con fetch</h2>
      <main>
        {data.map((pokemon) => (
          <article key={pokemon.name}>
            <p>{pokemon.name}</p>
          </article>
        ))}
      </main>
    </>
  );
};
