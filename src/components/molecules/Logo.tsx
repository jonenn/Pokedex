import LogoImg from "@/assets/Logo.svg";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import "@/styles/molecules/Logo.css";

const Logo = () => {
   return (
      <div className="logo">
         <Image src={LogoImg} alt="Pokedex logo" />
         <Text as="h2">Pokédex</Text>
      </div>
   );
};

export default Logo;
