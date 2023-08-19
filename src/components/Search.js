import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { DrinkCard } from "./DrinkCard";
import { ErrorModal } from "./ErrorModal";

export const Search = (props) => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(0);
  const [e, setE] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + props.url
      )
      .then((res) => {
        if (res.data.length == 0) {
          axios
            .get(
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
                props.url
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
          <Loader size="massive">SEARCHING THE BAR!</Loader>
        </Dimmer>
      </Segment>
    );
  }

  return (
    <>
      {isError < 1 ? (
        <ErrorModal error={e} />
      ) : (
        <div className="cardContainer">
          {drinks.map((drink) => {
            return (
              <DrinkCard
                name={drink.strDrink}
                img={drink.strDrinkThumb}
                id={drink.idDrink}
                url={props.url}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
