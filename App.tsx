import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AutorSeite from './pages/AutorSeite';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
                  {/* // HR-UPDATER: v1.0 */}
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/autor/thomas-sander" element={<AutorSeite />} />
          </Routes>
      </Layout>
    </Router>
  );
};

export default App;