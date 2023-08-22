import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import { DrinkCardList } from "./DrinkCardList";
import { ErrorModal } from "./ErrorModal";
import "./MainMenu.css";
import { DrinkList } from "./DrinkList";
import { DrinkCard } from "./DrinkCard";
import { Nav } from "./Nav";

import Loading from "../images/Loading.png"


export const Search = (props) => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(0);
  const [e, setE] = useState("");

  let url = props.url;
// console.log(url, props.url)
//   if(url ==""){
//     url="random"
//   }
//   console.log(url)
  useEffect(() => {
    
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + url
      )
      .then((res) => {
        if (res.data.length == 0) {
          axios
            .get(
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
                url
            )
            .then((res) => {
              if (res.data.drinks === null) {
                setLoading(false);
                setIsError(0);
                setE("No drink or ingredient found!");
              } else {
                let info = res.data.drinks;
                setDrinks(info);
                setIsError(1);
                setLoading(false);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          let info = res.data.drinks;
          setDrinks(info);
          setIsError(1);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  if (isLoading) {
    return (
      <Segment>
        <Dimmer active>
          <Loader size="massive" className="loader">SEARCHING THE BAR!</Loader>
        </Dimmer>
        <Image src={Loading} />

      </Segment>
    );
  }

  return (
    <>
        <Nav />
                <div className="drinkCategory">Results for: {url}</div>


      {isError < 1 ? (
        <ErrorModal error={e} />
      ) : (
        <div className="cardContainer">
          {drinks.map((drink) => {
            return (
              <>
              <DrinkCardList
                name={drink.strDrink}
                img={drink.strDrinkThumb}
                id={drink.idDrink}
                url={props.url}
              /></>
            );
          })}
        </div>
      )}
    </>
  );
};
