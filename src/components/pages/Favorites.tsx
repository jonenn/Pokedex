import { useEffect, useState } from 'react';
import Card from '../molecules/Card';
import MainTemplate from '../templates/MainTemplate';
import Text from '../atoms/Text';
import FavoriteButton from '../atoms/FavoriteButton';
import '@/styles/pages/Favorites.css';

interface FavoritePokemon {
   id: number;
   name: string;
   type: string;
}

const FAVORITES_KEY = 'favoritePokemons';

const Favorite = () => {
   const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

   useEffect(() => {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
         setFavorites(JSON.parse(stored));
      }
   }, []);

   const removeFavorite = (id: number) => {
      const updated = favorites.filter((p) => p.id !== id);
      setFavorites(updated);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
   };

   return (
      <MainTemplate favorite={true}>
         {favorites.length === 0 ? (
            <Text as="p">No favorites yet.</Text>
         ) : (
            favorites.map((pokemon) => (
               <div key={pokemon.id} className="favorites__container">
                  <FavoriteButton
                     isFavorite
                     onClick={() => removeFavorite(pokemon.id)}
                     className="favorites__button"
                  />
                  <Card
                     number={pokemon.id}
                     title={pokemon.name}
                     image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  />
               </div>
            ))
         )}
      </MainTemplate>
   );
};

export default Favorite;
