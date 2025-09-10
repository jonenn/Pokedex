import '@/styles/pages/Home.css';
import MainTemplate from '../templates/MainTemplate';
import Card from '../molecules/Card';

const Home = () => {
   return (
      <MainTemplate>
         <Card number={999} title="Pókemon Name" />
      </MainTemplate>
   );
};

export default Home;
