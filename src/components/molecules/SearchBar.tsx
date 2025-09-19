import { useState, useEffect } from 'react';
import {
   useLocation,
   useNavigate,
   useSearchParams,
   Link,
} from 'react-router-dom';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Input from '../atoms/Input';
import Sharp from '@/assets/Sharp.svg';
import Letter from '@/assets/Letter.svg';
import '@/styles/molecules/SearchBar.css';
import SortModal from '../molecules/SortModal';
import FavoriteButton from '../atoms/FavoriteButton';
import Text from '../atoms/Text';

interface SearchBarProps {
   sortBy?: 'number' | 'name';
   onSortChange?: (value: 'number' | 'name') => void;
}

const SearchBar = ({ sortBy, onSortChange }: SearchBarProps) => {
   const [params] = useSearchParams();
   const query = params.get('query') || '';
   const [keyword, setKeyword] = useState(query);
   const [error, setError] = useState('');
   const [showSort, setShowSort] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   // ✅ Keep input in sync with URL query param
   useEffect(() => {
      setKeyword(query);
   }, [query]);

   const getValidationError = (value: string): string => {
      const trimmed = value.trim();

      if (trimmed.length <= 1) return '';
      if (trimmed.length < 3) return 'Enter at least 3 characters.';
      if (trimmed.length > 30) return 'Search term is too long.';
      if (!/^[a-zA-Z\s-]+$/.test(trimmed))
         return 'Only letters, spaces, and hyphens are allowed.';

      return '';
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setKeyword(value);
      setError(getValidationError(value));
   };

   const handleSearch = () => {
      const validationError = getValidationError(keyword);
      setError(validationError);

      if (!validationError && keyword.trim()) {
         navigate(`/search?query=${encodeURIComponent(keyword.trim())}`);
      }
   };

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
               onChange={handleChange}
               onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                     e.preventDefault();
                     handleSearch();
                  }
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
