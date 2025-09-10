import CardWrapper from '../atoms/CardWrapper';
import Main from '../atoms/Main';
import Header from '../organisms/Header';
import '@/styles/templates/MainTemplate.css';

const MainTemplate = () => {
   return (
      <>
         <Header />
         <Main>
            <CardWrapper>Hi</CardWrapper>
         </Main>
      </>
   );
};

export default MainTemplate;
