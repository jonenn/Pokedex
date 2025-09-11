import '@/styles/pages/Character.css';
import CharTemplate from '../templates/CharTemplate';
import NavChar from '../organisms/NavChar';
import AboutSection from '../organisms/AboutSection';
import StatsSection from '../organisms/StatsSection';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Pokemon } from '../../utils/PokemonTypes';
import { fetchPokemonById } from '../../api/pokemon';

const Character = () => {
   const { id } = useParams();
   const [pokemon, setPokemon] = useState<Pokemon | null>(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchPokemon = async () => {
         try {
            setIsLoading(true);
            const response = await fetchPokemonById(Number(id));
            setPokemon(response);
         } catch (error) {
            console.error('Error fetching pokemon:', error);
         } finally {
            setIsLoading(false);
         }
      };

      if (id) {
         fetchPokemon();
      }
   }, [id]);

   if (isLoading) {
      return (
         <CharTemplate title="Loading...">
            <div>Loading...</div>
         </CharTemplate>
      );
   }

   if (!pokemon) {
      return (
         <CharTemplate title="Not found">
            <div>Pokemon not found</div>
         </CharTemplate>
      );
   }

   return (
      <CharTemplate title={pokemon.name}>
         <NavChar
            type={pokemon.types[0]}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
         />
         <AboutSection
            weight={`${pokemon.weight / 10}`}
            height={`${pokemon.height / 10}`}
            abilities={pokemon.abilities}
            description={pokemon.description}
         />
         <StatsSection stats={pokemon.stats} />
      </CharTemplate>
   );
};

export default Character;
