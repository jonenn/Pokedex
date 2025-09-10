import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/styles/main.css';
import Home from './components/pages/Home';
import Character from './components/pages/Character';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/number" element={<Character />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
         </Routes>
      </BrowserRouter>
   );
};

export default App;
