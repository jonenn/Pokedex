import Main from '../atoms/Main';
import Header from '../organisms/Header';
import '@/styles/templates/MainTemplate.css';

interface MainTemplateProps {
   children?: React.ReactNode;
   sortBy: 'number' | 'name';
   onSortChange: (value: 'number' | 'name') => void;
}

const MainTemplate = ({
   children,
   sortBy,
   onSortChange,
}: MainTemplateProps) => {
   return (
      <>
         <Header sortBy={sortBy} onSortChange={onSortChange} />
         <div className="main__container">
            <Main>
               <div className="main__subcontainer">{children}</div>
            </Main>
         </div>
      </>
   );
};

export default MainTemplate;
