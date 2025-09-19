export const SEARCH_POKEMONS = `
  query searchPokemons($name: String!) {
    pokemon_v2_pokemon(
      where: { name: { _ilike: $name } }
      order_by: { id: asc }
    ) {
      id
      name
    }
  }
`;
