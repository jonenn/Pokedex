import Logo from "../molecules/Logo";
import "@/styles/organisms/Header.css";
import SearchBar from "../molecules/SearchBar";

const Header = () => {
   return (
      <div className="header">
         <Logo />
         <SearchBar />
      </div>
   );
};

export default Header;
