import React from 'react';
import Particles from "../utilis/particles";
import Navbar from '../common/navbar/Navbar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../components/Home/HomePage';
import AboutPage from '../components/About_Me/AboutPage';
import ContactPage from '../components/Contact/ContactPage';
import EducationPage from '../components/Education/EducationPage';
import SkillsPage from '../components/Skills/SkillsPage';
import PortFolioPage from '../components/MyPortFolio/PortFolioPage';
import { loadFull } from 'tsparticles';
// import { render } from '@testing-library/react';

function AppRoutes() {

  const location = useLocation();
  const handleInit = async (main) => {
    try {
      console.log('Success:', main);
      await loadFull(main);
    } catch (error) {
      console.error('Initialization failed:', error);
    }
  }

  const renderParticle = location.pathname === '/';

  return <>
  {/* Partccles JS */}
  {
    renderParticle && <Particles id='particles' init={handleInit} />
  }
  
  {/* NavBar */}
  <Navbar />

  {/* Main Page Content */}
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/aboutme' element={<AboutPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/education' element={<EducationPage />} />
    <Route path='/skills' element={<SkillsPage />} />
    <Route path='/portfolio' element={<PortFolioPage />} />
    <Route path='*' element={<Navigate to = '/' />} />
  </Routes>
  </>
}

export default AppRoutes