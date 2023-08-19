import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MainMenu.css";
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
import { MainMenu } from "../components/MainMenu";

export const RandomDrink = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [newDrink, setNewDrink] = useState({});
  const [open, setOpen] = React.useState(true);
  let x;
  let ingredientsArray = [];
  let measurementArray = [];
  let key = Object.keys(newDrink);
  let val = Object.values(newDrink);

  for (x in key) {
    if (key[x].includes("strIngredient") && val[x] != null) {
      ingredientsArray.push(val[x]);
    } else if (key[x].includes("strMeasure") && val[x] != null) {
      measurementArray.push(val[x]);
    }
  }

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        setNewDrink(res.data.drinks[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <Segment>
        <Dimmer active>
          <Loader size="massive" inline="centered">
            POURING IT UP!
          </Loader>
        </Dimmer>
      </Segment>
    );
  }

  return (
    <>
      <Modal
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>{newDrink.strDrink}</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={newDrink.strDrinkThumb} wrapped />
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
                    return (
                      <img
                        src={
                          "https://www.thecocktaildb.com/images/ingredients/" +
                          ing +
                          "-Small.png"
                        }
                      />
                    );
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
          {/* <Button color="black" onClick={() => setOpen(false)} href="/">
            Let's Try Something Else
          </Button> */}

          <Button
            content="GIVE ME ANOTHER"
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
    </>
  );
};
