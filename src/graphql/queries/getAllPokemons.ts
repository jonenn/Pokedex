export const GET_ALL_POKEMONS = `
  query getAllPokemons($limit: Int!) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
    }
  }
`;
