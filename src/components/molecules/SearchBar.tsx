import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Input from '../atoms/Input';
import Sharp from '@/assets/Sharp.svg';
import '@/styles/molecules/SearchBar.css';

const SearchBar = () => {
   return (
      <div className="search-bar">
         <Input placeholder="Search" id="search" name="search" />
         <Button>
            <Image src={Sharp} alt="Sort button" width={16} height={16} />
         </Button>
      </div>
   );
};

export default SearchBar;
