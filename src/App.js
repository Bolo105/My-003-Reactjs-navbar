import React from 'react'
import './App.css';
import { NavbarTop } from './components/NavbarTop';
import { NavbarMed } from './components/NavbarMed';
import { NavbarNav } from './components/NavbarNav';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <NavbarMed />
      <NavbarNav />
      <Hero />
    </div>
  );
}

export default App;
