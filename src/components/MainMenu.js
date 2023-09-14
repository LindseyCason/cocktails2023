import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DrinkMenu } from "../data/DrinkMenu";
import "./MainMenu.css";
import { Search } from "./Search";
import { FaSearch } from "react-icons/fa";
import { DrinkCard } from "./DrinkCard";
import { Footer } from "./Footer";
import { Nav } from "./Nav"

export const MainMenu = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);
  const navigation= useNavigate("")

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    setLoading(false);
    navigation("/search")
  };

  if (!isLoading) {
    return <Search url={search} />;
  }

  return (
    <>
    <Nav />
    <div className="headerImageContainer">
        <div className="headerImage"
          alt="Dipicts a hand placing a cherry in a drink next to a shaker.">
                <div className="heroTextContainer" id="top">
                    <p className="heroText" type='text' alt="Sip, Savor & Stir">Sip, Savor & Stir</p>
                    <p className="heroSubText">Craft your own adventure.</p>
                </div>

        {/* SEARCH */}

        <form className="searchDiv" onSubmit={handleSubmit}>
                <input
                  className="searchBox"
                  type="text"
                  value={search}
                  placeholder="ENTER A COCKTAIL OR INGREDIENT"
                  onChange={handleInputChange}
                />
                <button
                  disabled={search.length === 0}
                  type="submit"
                  className="searchButton"
                  onClick={handleSubmit}
                >
                  <FaSearch />
                  {/* SEARCH */}
                </button>
        </form>
        </div>
        </div>
      {/* MENU OF CARDS */}
      <div className="mainMenu">
        {DrinkMenu.map((drink) => {
          let srcurl;


          return (
            <DrinkCard
              href={"/" + drink.url}
              url={drink.url}
              className="cardBox"
              img={srcurl}
              div={drink.url}
              name={drink.type}
              type="1"
            />
          );
        })}

      </div>
      <div className="mainMenuBottom">
        <span className='mainBottomText'>
          Still looking to treat your tastebuds?
        </span>
        <div className="buttonContainer">
              <a href='/Random'>
              <button id="random">
              Random Drink
              </button></a>
              <a href="#top">
              <button id="search" >
              Drink Search
              </button></a>
        </div>
      </div>
      <Footer />
    </>
  );
};
