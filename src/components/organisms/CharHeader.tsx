import { useEffect, useState } from "react";
import NavArrow from "../molecules/NavArrow";
import Text from "../atoms/Text";
import "@/styles/organisms/CharHeader.css";
import ArrowImage from "@/assets/NavArrow.svg";
import FavoriteButton from "../atoms/FavoriteButton";
import { toast } from "react-toastify";

interface CharHeaderProps {
   name: string;
   number: number;
   type?: string;
}

const FAVORITES_KEY = "favoritePokemons";

const CharHeader = ({ name, number, type }: CharHeaderProps) => {
   const [isFavorite, setIsFavorite] = useState(false);

   useEffect(() => {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
         const favs: { id: number; name: string; type: string }[] =
            JSON.parse(stored);
         setIsFavorite(favs.some((p) => p.id === number));
      } else {
         setIsFavorite(false);
      }
   }, [number]);

   const capitalize = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

   const handleFavoriteClick = () => {
      const stored = localStorage.getItem(FAVORITES_KEY);
      let favs: { id: number; name: string; type: string }[] = stored
         ? JSON.parse(stored)
         : [];
      if (!isFavorite) {
         if (!favs.some((p) => p.id === number)) {
            favs.push({ id: number, name, type: type || "" });
         }
         setIsFavorite(true);
         toast.info(
            <Text>
               <strong>{capitalize(name)}</strong> <i>added</i> to favorites!
            </Text>
         );
      } else {
         favs = favs.filter((p) => p.id !== number);
         setIsFavorite(false);
         toast.info(
            <Text>
               <strong>{capitalize(name)}</strong> <i>removed</i> from
               favorites!
            </Text>
         );
      }
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
   };

   return (
      <div className="char__header">
         <div className="char__container">
            <div className="char__nav">
               <NavArrow image={ArrowImage} />
               <Text as="h1">{name || "Pokémon Name"}</Text>
            </div>
            <div className="char__container char__container--fav">
               <Text as="h5">#{number || "999"}</Text>
               <FavoriteButton
                  isFavorite={isFavorite}
                  onClick={handleFavoriteClick}
               />
            </div>
         </div>
      </div>
   );
};

export default CharHeader;
