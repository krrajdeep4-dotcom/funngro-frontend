import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const TeenPage = lazy(() => import('./pages/TeenPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
     
        <Suspense fallback={
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<TeenPage />} />
            <Route path="/company" element={<CompanyPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </div>
  );
}

export default App;