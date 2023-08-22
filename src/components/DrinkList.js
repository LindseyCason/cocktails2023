import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { DrinkCardList } from "./DrinkCardList";
import "./MainMenu.css";
import { Dimmer, Loader, Segment, Image } from "semantic-ui-react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

import Loading from "../images/Loading.png"

//THIS IS FOR THE LIST OF DRINK PER TYPE
export const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = useLocation().pathname.split("/")[1];

  useEffect(() => {
    let non = "filter.php?a=";
    let alc = "lookup.php?i=";

    if (url === "Non-Alcoholic") {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
        )
        .then((res) => {
          let info = res.data.drinks;
          setDrinks(info);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${url}`)
        .then((res) => {
          let info = res.data.drinks;
          setDrinks(info);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  if (isLoading) {
    return (
      <div className="Loader">
      <Segment>
        <Dimmer active>
          <Loader size="massive">SEARCHING THE BAR!</Loader>
        </Dimmer>
        <Image src={Loading} />
      </Segment>
      </div>
    );
  }
  return (
    <>
    <Nav />
            <div className="drinkCategory">{url}</div>

      <div className="cardContainer">
        {drinks.map((drink) => {
          return (
            <>
            <DrinkCardList
              name={drink.strDrink}
              img={drink.strDrinkThumb}
              id={drink.idDrink}
              url={url}
              type="2"
            />
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
