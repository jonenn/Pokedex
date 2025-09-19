import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/styles/main.css';
import Home from './components/pages/Home';
import Character from './components/pages/Character';
import Favorites from './components/pages/Favorites';
import SearchPage from './components/pages/Search';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Character />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<SearchPage />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
