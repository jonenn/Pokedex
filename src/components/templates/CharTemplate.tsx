import Main from '../atoms/Main';
import Header from '../organisms/Header';
import '@/styles/templates/MainTemplate.css';

interface MainTemplateProps {
   children?: React.ReactNode;
}

const CharTemplate = ({ children }: MainTemplateProps) => {
   return (
      <>
         <Header />
         <Main>
            <div className="main__subcontainer">{children}</div>
         </Main>
      </>
   );
};

export default CharTemplate;
