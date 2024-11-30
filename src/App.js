import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Routers from './components/Routers';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Routers />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
