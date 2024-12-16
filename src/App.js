import "./App.css";
import React from "react";
import Routers from "./components/Routers";
import NavBarPage from "./components/pages/NavBarPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBarPage />
      <Routers />
      <Footer />
    </div>
  );
}
export default App;
