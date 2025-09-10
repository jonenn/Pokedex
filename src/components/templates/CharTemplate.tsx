import Main from '../atoms/Main';
import CharHeader from '../organisms/CharHeader';

interface MainTemplateProps {
   children?: React.ReactNode;
}

const CharTemplate = ({ children }: MainTemplateProps) => {
   return (
      <>
         <CharHeader name="Pokémon Name" number={999} />
         <Main className="main--char">{children}</Main>
      </>
   );
};

export default CharTemplate;
