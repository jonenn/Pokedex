import Main from '../atoms/Main';
import CharHeader from '../organisms/CharHeader';
import '@/styles/templates/MainTemplate.css';

interface MainTemplateProps {
   children?: React.ReactNode;
}

const CharTemplate = ({ children }: MainTemplateProps) => {
   return (
      <>
         <CharHeader name="Pokémon Name" number={999} />
         <Main>
            <div className="main__subcontainer">{children}</div>
         </Main>
      </>
   );
};

export default CharTemplate;
