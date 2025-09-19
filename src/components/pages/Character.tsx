import "@/styles/pages/Character.css";
import CharTemplate from "../templates/CharTemplate";
import NavChar from "../organisms/NavChar";
import AboutSection from "../organisms/AboutSection";
import StatsSection from "../organisms/StatsSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Pokemon } from "../../utils/PokemonTypes";
import { fetchPokemonById } from "../../api/pokemon";

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
            console.error("Error fetching pokemon:", error);
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
         <CharTemplate title="Loading..." type="Normal" number={999}>
            <div>Loading...</div>
         </CharTemplate>
      );
   }

   if (!pokemon) {
      return (
         <CharTemplate title="Not found" type="Normal" number={999}>
            <div>Pokemon not found</div>
         </CharTemplate>
      );
   }

   return (
      <CharTemplate
         title={pokemon.name}
         type={pokemon.types[0]}
         number={pokemon.id}
      >
         <>
            <NavChar
               type={pokemon.types}
               image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
               next={
                  Number(id) === 1024
                     ? `/pokemon/0`
                     : `/pokemon/${Number(id) + 1}`
               }
               previous={
                  Number(id) === 0
                     ? `/pokemon/1025`
                     : `/pokemon/${Number(id) - 1}`
               }
            />
            <AboutSection
               weight={`${pokemon.weight / 10}`}
               height={`${pokemon.height / 10}`}
               abilities={pokemon.abilities}
               description={pokemon.description}
            />
            <StatsSection stats={pokemon.stats} />
         </>
      </CharTemplate>
   );
};

export default Character;
