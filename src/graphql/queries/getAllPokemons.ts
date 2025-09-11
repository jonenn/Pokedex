export const GET_ALL_POKEMONS = `
  query getAllPokemons($limit: Int!, $orderBy: [pokemon_v2_pokemon_order_by!]) {
    pokemon_v2_pokemon(limit: $limit, order_by: $orderBy) {
      id
      name
    }
  }
`;
