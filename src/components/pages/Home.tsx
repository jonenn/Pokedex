import '@/styles/pages/Home.css';
import MainTemplate from '../templates/MainTemplate';
import Card from '../molecules/Card';
import { useEffect, useState } from 'react';
import { fetchAllPokemons } from '../../api/pokemon';
import type { BasicPokemon } from '../../api/pokemon';

type SortType = 'number' | 'name';

const Home = () => {
   const [pokemons, setPokemons] = useState<BasicPokemon[]>([]);
   const [sortBy, setSortBy] = useState<SortType>('number');

   useEffect(() => {
      const getAllPokemons = async () => {
         try {
            const pokemonList = await fetchAllPokemons(sortBy);
            setPokemons(pokemonList);
            console.log(pokemonList);
         } catch (error) {
            console.error('Error fetching pokemons:', error);
         }
      };

      getAllPokemons();
   }, [sortBy]);

   return (
      <MainTemplate>
         {pokemons?.map((pokemon) => (
            <Card
               key={pokemon.id}
               number={pokemon.id}
               title={pokemon.name}
               image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            />
         ))}
      </MainTemplate>
   );
};

export default Home;
