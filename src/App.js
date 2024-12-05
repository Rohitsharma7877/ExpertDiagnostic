import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Routers from './components/Routers';
// import Footer from './components/Footer/Footer';
import Footer1 from './components/Footer/Footer1';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Routers />

      <Footer1/>
      
    </div>
  );
}

export default App;
