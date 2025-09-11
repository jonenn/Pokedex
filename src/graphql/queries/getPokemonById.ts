export const GET_POKEMON_BY_ID = `
query getPokemonById($id: Int!) {
  pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
    id
    name
    height
    weight
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }

    # Base stats (HP, Attack, Defense, etc.)
    pokemon_v2_pokemonstats {
      base_stat
      pokemon_v2_stat {
        name
      }
    }

    # Abilities
    pokemon_v2_pokemonabilities {
      pokemon_v2_ability {
        name
      }
    }

    # Moves (first 10 to avoid huge response)
    pokemon_v2_pokemonmoves(limit: 10) {
      pokemon_v2_move {
        name
      }
    }

    # Flavor text (Pokédex description)
    pokemon_v2_pokemonspecy {
      pokemon_v2_pokemonspeciesflavortexts(limit: 1, where: { language_id: { _eq: 9 } }) {
        flavor_text
      }
    }
  }
}
`;
