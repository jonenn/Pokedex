import '@/styles/pages/Home.css';
import MainTemplate from '../templates/MainTemplate';
import Card from '../molecules/Card';
import { useEffect, useState } from 'react';

interface Pokemon {
   name: string;
}

const Home = () => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);

   useEffect(() => {
      const setAllPokemons = async () => {
         const response = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=151'
         );
         const data = await response.json();
         setPokemons(data.results);
         console.log(data.results);
      };

      setAllPokemons();
   }, []);

   return (
      <MainTemplate>
         {pokemons.map((pokemon, index) => {
            const pokemonId = index + 1;
            return (
               <Card
                  key={pokemonId}
                  number={pokemonId}
                  title={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
               />
            );
         })}
      </MainTemplate>
   );
};

export default Home;
