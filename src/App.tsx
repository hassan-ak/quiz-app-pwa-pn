// Imports
// React Imports
import React from 'react';
// Component Imports
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Body } from './components/Body';
// Styles Imports
import './App.css';


function App() {
  return (
    <div className="container">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
