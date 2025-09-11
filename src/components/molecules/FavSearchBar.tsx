import { useState } from 'react';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Input from '../atoms/Input';
import Sharp from '@/assets/Sharp.svg';
import Letter from '@/assets/Letter.svg';
import '@/styles/molecules/SearchBar.css';
import SortModal from './SortModal';
import FavoriteButton from '../atoms/FavoriteButton';
import { Link } from 'react-router-dom';

interface SearchBarProps {
   sortBy: 'number' | 'name';
   onSortChange: (value: 'number' | 'name') => void;
}

const SearchBar = ({ sortBy, onSortChange }: SearchBarProps) => {
   const [showSort, setShowSort] = useState(false);

   return (
      <div className="search-bar">
         <Input
            placeholder="Search"
            id="search"
            name="search"
            className="search-bar__input"
         />
         <Button onClick={() => setShowSort((prev) => !prev)}>
            <Image
               src={sortBy === 'name' ? Letter : Sharp}
               alt="Sort button"
               width={16}
               height={16}
            />
         </Button>
         <Link to="/favorites">
            <FavoriteButton isFavorite={true} />
         </Link>

         {showSort && (
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
