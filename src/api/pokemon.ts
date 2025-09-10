const API_URL = 'https://beta.pokeapi.co/graphql/v1beta';

export async function fetchPokemon(query: string, variables = {}) {
   const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
   });
   return response.json();
}
