import "./App.css";
import { DrinkList } from "./components/DrinkList";
import { DrinkDetails } from "./components/DrinkDetailsModal";
import { RandomDrink } from "./components/RandomDrink";
import { Nav } from "./components/Nav";
import { MainMenu } from "./components/MainMenu";
// import { MainMenuTest } from "./components/MainMenuTest";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hamburger } from "./components/Hamburger";

function App() {
  return (
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route exact path="/random" element={< RandomDrink/>} />
        
          <Route exact path="/" element={<MainMenu />} />
          {/* <Route exact path="/test" element={<MainMenuTest />} /> */}

          <Route exact path="/rum" element={<DrinkList />} />
            
          <Route exact path="/vodka" element={<DrinkList />} />

          <Route exact path="/gin"  element={<DrinkList />} />

          <Route exact path="/whisky" element={<DrinkList />} />

          <Route exact path="/champagne" element={<DrinkList />} />

          <Route exact path="/brandy"  element={<DrinkList />} /> 

          <Route exact path="/scotch"  element={<DrinkList />} />
         
          <Route exact path="/tequila"  element={<DrinkList />} />

          <Route exact path="/non-alcoholic"  element={<DrinkList />} />

          <Route exact path="/:id" element={<DrinkDetails />} />
            
          <Route exact path="/search" element={<DrinkList />} />

          <Route exact path="/contact" element={<Hamburger />} />
            
        </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
