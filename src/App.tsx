
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderSection from './components/HeaderSection';


import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import AboutUsPage from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import RoomsDetailsPage from './pages/RoomsDetailsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';

function App() {
  return (
    <Router>
      <HeaderSection />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/room-details" element={<RoomsDetailsPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
