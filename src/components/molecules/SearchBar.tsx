import { useState } from 'react';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Input from '../atoms/Input';
import SortDropdown from '../molecules/SortModal';
import Sharp from '@/assets/Sharp.svg';
import '@/styles/molecules/SearchBar.css';

const SearchBar = () => {
   const [showSort, setShowSort] = useState(false);
   const [sortBy, setSortBy] = useState<'number' | 'name'>('number');

   return (
      <div className="search-bar">
         <Input
            placeholder="Search"
            id="search"
            name="search"
            className="search-bar__input"
         />
         <Button onClick={() => setShowSort((prev) => !prev)}>
            <Image src={Sharp} alt="Sort button" width={16} height={16} />
         </Button>

         {showSort && (
            <SortDropdown
               selected={sortBy}
               onChange={(val) => setSortBy(val as 'number' | 'name')}
            />
         )}
      </div>
   );
};

export default SearchBar;
