import { useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonsAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Pokemons con Axios</h2>
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
