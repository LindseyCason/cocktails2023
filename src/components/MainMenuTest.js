import React, { useState, useEffect } from "react";
import { DrinkMenu } from "../data/DrinkMenu";
import "./MainMenu.css";
import "../images/random-Medium.png";
import { Search } from "./Search";
import { FaSearch } from "react-icons/fa";
import { DrinkCard } from "./DrinkCard";
import { Footer } from "./Footer";
import headerImage from "../images/headerImage.png";
import searchImage from "../images/searchSection.png"

export const MainMenuTest = () => {
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
    {/* <h1>TESTING</h1> */}
     {/* <div className="topMainMenuContainer" id="mainMenu"> */}
      <div
          className="headerImageTest"
          background-img=""
          alt="Dipicts a hand placing a cherry in a drink next to a shaker. Words read, Sip Savor and Stir: Choose Your Own Adventure."
        >

        {/* SEARCH */}

        <form className="searchDivTest" onSubmit={handleSubmit}>
          {/* <div className="searchText">Search for a drink or an ingredient.</div> */}
          <input
            className="searchBox"
            type="text"
            value={search}
            placeholder="Cocktail or Ingredient"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="searchButton"
            href={`/${search}`}
            onClick={handleSubmit}
          >
            <FaSearch />
          </button>
        </form>
        </div>
      {/* </div> */}

      {/* MENU OF CARDS */}


      {/* --------------------------- */}
      <div className="mainMenu">
        {DrinkMenu.map((drink) => {
          let srcurl;
          if (drink.url === "non_alcoholic") {
            srcurl =
              "https://www.thecocktaildb.com/images/ingredients/Cherry%20Cola.png";
          } else if (drink.url === "random") {
            srcurl =
              "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg";
          } else {
            srcurl =
              "https://www.thecocktaildb.com/images/ingredients/" +
              drink.url +
              "-Medium.png";
          }
          return (
            <DrinkCard
              href={"/" + drink.url}
              url={drink.url}
              className="cardBox"
              id={drink.id}
              img={srcurl}
              name={drink.type}
              type="1"
            />
          );
        })}

       
      </div>


      {/* ----------------- */}
      <Footer />
    </>
  );
};
