import "./App.css";
import { DrinkList } from "./components/DrinkList";
import { DrinkDetails } from "./components/DrinkDetailsModal";
import { RandomDrink } from "./components/RandomDrink";
import { MainMenu } from "./components/MainMenu";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

          <Route exact path="/whiskey" element={<DrinkList />} />

          <Route exact path="/champagne" element={<DrinkList />} />

          <Route exact path="/brandy"  element={<DrinkList />} /> 

          <Route exact path="/scotch"  element={<DrinkList />} />
         
          <Route exact path="/tequila"  element={<DrinkList />} />

          <Route exact path="/bourbon"  element={<DrinkList />} />

          <Route exact path="/non-alcoholic"  element={<DrinkList />} />

          <Route exact path="/:id" element={<DrinkDetails />} />
          {/* <Route exact path="/:id" /> */}
            
          <Route exact path="/search" element={<MainMenu />} />

            
        </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
