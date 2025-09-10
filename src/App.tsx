import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/styles/main.css';
import Home from './components/pages/Home';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/number" element={<Number />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
         </Routes>
      </BrowserRouter>
   );
};

export default App;
