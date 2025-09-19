import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Input from '../atoms/Input';
import Sharp from '@/assets/Sharp.svg';
import Letter from '@/assets/Letter.svg';
import '@/styles/molecules/SearchBar.css';
import SortModal from '../molecules/SortModal';
import { Link } from 'react-router-dom';
import FavoriteButton from '../atoms/FavoriteButton';
import Text from '../atoms/Text';

interface SearchBarProps {
   sortBy?: 'number' | 'name';
   onSortChange?: (value: 'number' | 'name') => void;
}

const SearchBar = ({ sortBy, onSortChange }: SearchBarProps) => {
   const [keyword, setKeyword] = useState('');
   const [error, setError] = useState('');
   const [showSort, setShowSort] = useState(false);
   const location = useLocation();

   const validateKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setKeyword(value);

      const trimmed = value.trim();

      if (trimmed.length === 0 || trimmed.length === 1) {
         setError('');
         return;
      }

      if (trimmed.length < 3) {
         setError('Enter at least 3 characters.');
      } else if (trimmed.length > 30) {
         setError('Search term is too long.');
      } else if (!/^[a-zA-Z\s-]+$/.test(trimmed)) {
         setError('Only letters, spaces, and hyphens are allowed.');
      } else {
         setError('');
      }
   };
   console.log(location);

   return (
      <div className="search-bar">
         <div
            className={`search-bar__wrapper ${
               error ? 'search-bar__wrapper--error' : ''
            }`}
         >
            <Input
               placeholder="Search"
               id="search"
               name="search"
               className="search-bar__input"
               value={keyword}
               onChange={(e) => {
                  validateKeyword(e);
               }}
            />
            {error && (
               <Text as="p" className="search-bar__error">
                  {error}
               </Text>
            )}
         </div>
         {location.pathname !== '/favorites' && (
            <Button
               onClick={() => setShowSort((prev) => !prev)}
               className="search-bar__button"
            >
               <Image
                  src={sortBy === 'name' ? Letter : Sharp}
                  alt="Sort button"
                  width={16}
                  height={16}
               />
            </Button>
         )}
         <Link to="/favorites">
            <FavoriteButton isFavorite={true} className="search-bar__button" />
         </Link>

         {showSort && sortBy && onSortChange && (
            <SortModal
               selected={sortBy}
               onChange={(val) => {
                  onSortChange(val as 'number' | 'name');
                  setShowSort(false);
               }}
            />
         )}
      </div>
   );
};

export default SearchBar;
