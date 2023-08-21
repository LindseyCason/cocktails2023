import React, { useState, useEffect } from "react";
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

  useEffect(() => {});

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    setLoading(false);
  };

  if (!isLoading) {
    return <Search url={search} />;
  }

  return (
    <>
    <div className="headerImageContainer">
      <div
          className="headerImage"
          alt="Dipicts a hand placing a cherry in a drink next to a shaker.">
        {/* NAV */}
        <Nav />

        <div className="heroTextContainer">
            <p className="heroText" type='text' alt="Sip, Savor & Stir">Sip, Savor & Stir</p>
            <p className="heroSubText">Craft your own adventure.</p>
        </div>

        {/* SEARCH */}

        <form className="searchDiv" onSubmit={handleSubmit}>
          {/* <div className="searchText">Search for a drink or an ingredient.</div> */}
                <input
                  className="searchBox"
                  type="text"
                  value={search}
                  placeholder="ENTER A COCKTAIL OR INGREDIENT"
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className="searchButton"
                  href={`/${search}`}
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
          if (drink.url === "non_alcoholic") {
          //   srcurl = {mocktail}
          
          // } else if (drink.url === "random") {
          //   srcurl =
          //     "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg";
          // } 
          // // else {
          // //   srcurl =
          // //     "https://www.thecocktaildb.com/images/ingredients/" +
          // //     drink.url +
          // //     "-Medium.png";
          // // }

          // else if(drink.url === "rum") {
          //   srcurl = {rum}
          }

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
      <Footer />
    </>
  );
};
