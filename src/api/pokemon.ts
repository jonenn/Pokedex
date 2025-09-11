import { GET_POKEMON_BY_ID } from '../graphql/queries/getPokemonById';
import type { GQLResponse, Pokemon } from '@/utils/PokemonTypes';

const API_URL = 'https://beta.pokeapi.co/graphql/v1beta';

async function fetchPokemon(query: string, variables = {}) {
   const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
   });
   return response.json();
}

async function fetchPokemonById(id: number): Promise<Pokemon> {
   const data = await fetchPokemon<GQLResponse>(GET_POKEMON_BY_ID, { id });
   const result = data.data.pokemon_v2_pokemon[0];

   return {
      id: result.id,
      name: result.name,
      height: result.height,
      weight: result.weight,
      types: result.pokemon_v2_pokemontypes.map(
         (t: { pokemon_v2_type: { name: string } }) => t.pokemon_v2_type.name
      ),
      abilities: result.pokemon_v2_pokemonabilities.map(
         (a: { pokemon_v2_ability: { name: string } }) =>
            a.pokemon_v2_ability.name
      ),
      description:
         result.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0]
            ?.flavor_text ?? 'No description available.',
      stats: result.pokemon_v2_pokemonstats.map(
         (s: { pokemon_v2_stat: { name: string }; base_stat: number }) => ({
            label: s.pokemon_v2_stat.name.toUpperCase(),
            value: s.base_stat,
         })
      ),
   };
}

export { fetchPokemon, fetchPokemonById };
