import Button from '../atoms/Button';
import Input from '../atoms/Input';

const SearchBar = () => {
   return (
      <div>
         <Input placeholder="Search" id="search" name="search" />
         <Button />
      </div>
   );
};

export default SearchBar;
