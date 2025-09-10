import Main from '../atoms/Main';
import Header from '../organisms/Header';
import '@/styles/templates/MainTemplate.css';

interface MainTemplateProps {
   children?: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
   return (
      <>
         <Header />
         <Main>
            <div className="main__subcontainer">{children}</div>
         </Main>
      </>
   );
};

export default MainTemplate;
