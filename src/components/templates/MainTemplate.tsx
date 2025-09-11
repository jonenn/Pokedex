import Main from '../atoms/Main';
import Header from '../organisms/Header';
import '@/styles/templates/MainTemplate.css';

interface MainTemplateProps {
   children?: React.ReactNode;
   sortBy?: 'number' | 'name';
   onSortChange?: (value: 'number' | 'name') => void;
   favorite?: boolean;
}

const MainTemplate = ({
   children,
   sortBy,
   onSortChange,
   favorite,
}: MainTemplateProps) => {
   return (
      <>
         <Header sortBy={sortBy} onSortChange={onSortChange} />
         <div className="main__container">
            <Main>
               {favorite && 'Favorite Pokémons:'}
               <div className="main__subcontainer">{children}</div>
            </Main>
         </div>
      </>
   );
};

export default MainTemplate;
