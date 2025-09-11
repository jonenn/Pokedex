import Main from '../atoms/Main';
import CharHeader from '../organisms/CharHeader';

interface MainTemplateProps {
   children?: React.ReactNode;
   title: string;
}

const CharTemplate = ({ title, children }: MainTemplateProps) => {
   return (
      <>
         <CharHeader name={title || 'Pokémon Name'} number={999} />
         <Main className="main--char">{children}</Main>
      </>
   );
};

export default CharTemplate;
