import '@/styles/pages/Home.css';
import MainTemplate from '../templates/MainTemplate';
import Card from '../molecules/Card';
import { useEffect, useState } from 'react';
import { searchPokemons } from '../../api/pokemon';
import type { BasicPokemon } from '../../api/pokemon';
import { useSearchParams } from 'react-router-dom';
import Text from '../atoms/Text';

type SortType = 'number' | 'name';

const SearchPage = () => {
   const [pokemons, setPokemons] = useState<BasicPokemon[]>([]);
   const [sortBy, setSortBy] = useState<SortType>('number');
   const [params] = useSearchParams();
   const [loading, setLoading] = useState(false);
   const query = params.get('query') || '';

   useEffect(() => {
      const getSearchResults = async () => {
         setLoading(true);
         try {
            const pokemonList = await searchPokemons(query);
            setPokemons(pokemonList);
            console.log(pokemonList);
            setLoading(false);
         } catch (error) {
            console.error('Error fetching pokemons:', error);
            setLoading(false);
         }
      };

      getSearchResults();
   }, [query]);

   return (
      <MainTemplate sortBy={sortBy} onSortChange={setSortBy}>
         {loading && <Text>Loading...</Text>}
         {!loading &&
            pokemons.length > 0 &&
            pokemons.map((pokemon) => (
               <Card
                  key={pokemon.id}
                  number={pokemon.id}
                  title={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
               />
            ))}
         {!loading && pokemons.length === 0 && <Text>No Pokémon found</Text>}
      </MainTemplate>
   );
};

export default SearchPage;
