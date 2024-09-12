
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
        <Route path="/sona-website/" element={<HomePage />} />
        <Route path="/sona-website/rooms" element={<RoomsPage />} />
        <Route path="/sona-website/about-us" element={<AboutUsPage />} />
        <Route path="/sona-website/news" element={<NewsPage />} />
        <Route path="/sona-website/contact" element={<ContactPage />} />
        <Route path="/sona-website/room-details" element={<RoomsDetailsPage />} />
        <Route path="/sona-website/blog-details" element={<BlogDetailsPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
