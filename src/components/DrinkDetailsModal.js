import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import "./MainMenu.css";
import Loading from "../images/Loading.png"

import {
  Dimmer,
  Loader,
  Image,
  Segment,
  Button,
  Header,
  Modal,
  List,
} from "semantic-ui-react";
import { MainMenu } from "./MainMenu";

export const DrinkDetails = () => {
  const url = useLocation().pathname.split("/")[1]; // can this just be id?
  const [isLoading, setLoading] = useState(true);
  const [newDrink, setNewDrink] = useState({});
  const [open, setOpen] = useState(true);
  let x;
  let ingredientsArray = [];
  let measurementArray = [];

  let key = Object.keys(newDrink);
  let val = Object.values(newDrink);

  for (x in key) {
    if ((key[x].includes("strIngredient") && val[x] != null) || "") {
      ingredientsArray.push(val[x]);
    } else if ((key[x].includes("strMeasure") && val[x] != null) || "") {
      measurementArray.push(val[x]);
    }
  }

  useEffect(() => {
    if (url === "Non-Alcoholic") {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"}`
        )
        .then((res) => {
          setNewDrink(res.data.drinks);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${url}`)
        .then((res) => {
          setNewDrink(res.data.drinks[0]);
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
            <Loader size="massive" inline="centered">
            </Loader>
          </Dimmer>
          <Image src={Loading} />

        </Segment>
      </div>
    );
  }

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>{newDrink.strDrink}</Modal.Header>
        <Modal.Content image>
          <Image size="small" src={newDrink.strDrinkThumb} wrapped />
          <Modal.Description>
            <Header>Here's what you'll need...</Header>

            <List>
              {ingredientsArray.map((i) => {
                let m = ingredientsArray.indexOf(i);
                return (
                  <List.Item>
                    <List.Header>{i}</List.Header>
                    {measurementArray[m]}
                  </List.Item>
                );
              })}
              <p>
                <p>
                  {ingredientsArray.map((ing) => {
                    if (ing !== "") {
                      return (
                        <img alt=""
                          src={
                            "https://www.thecocktaildb.com/images/ingredients/" +
                            ing +
                            "-Small.png"
                          }
                        />
                      );
                    }
                  })}
                </p>

                <List.Item>
                  <List.Header>Glass:</List.Header>
                  {newDrink.strGlass}
                </List.Item>
                <p></p>
                <List.Item>
                  <List.Header>Instructions: </List.Header>
                  {newDrink.strInstructions}
                </List.Item>
              </p>
            </List>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content=" FEELIN LUCKY"
            labelPosition="right"
            icon="shuffle"
            onClick={() => setOpen(false)}
            href={"/random"}
            className="bttnClock"
          />
          <Button
            content="TAKE ME HOME"
            labelPosition="right"
            icon="home"
            onClick={() => setOpen(false)}
            href={"/"}
            className="bttnCoClock"
          />
        </Modal.Actions>
      </Modal>
      <MainMenu />
      {/* //this is why the main menu is loading in the bg of the modal */}
    </>
  );
};
