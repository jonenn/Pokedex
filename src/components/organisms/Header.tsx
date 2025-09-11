import Logo from '../molecules/Logo';
import '@/styles/organisms/Header.css';
import SearchBar from '../molecules/SearchBar';

interface HeaderProps {
   sortBy?: 'number' | 'name';
   onSortChange?: (value: 'number' | 'name') => void;
}

const Header = ({ sortBy, onSortChange }: HeaderProps) => {
   return (
      <div className="header">
         <Logo />
         <SearchBar sortBy={sortBy} onSortChange={onSortChange} />
      </div>
   );
};

export default Header;
