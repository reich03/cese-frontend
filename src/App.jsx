import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogView from './views/BlogView';
import Home from './views/Home';
import BlogDetail from './views/BlogDetail';
import ServicesView from './views/ServicesView';
import AboutUsView from './views/AboutUsView'; // Importar nueva vista
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/services" element={<ServicesView />} />
        <Route path="/about" element={<AboutUsView />} /> 
      </Routes>
    </Router>
  );
}

export default App;
