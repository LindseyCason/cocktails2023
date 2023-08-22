import React, { useState } from "react";
import "./MainMenu.css";
import { Image, Button, Header, Modal } from "semantic-ui-react";
import { MainMenu } from "./MainMenu";

export const ErrorModal = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open} //this leaves it open
      >
        <Modal.Header>Womp, Womp!</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src={
              "https://image.freepik.com/free-vector/oops-explosion-vector_53876-17099.jpg"
            }
            wrapped
          />
          <Modal.Description>
            <Header>{props.error}</Header>
            There was no drink found with that ingredient or by that name. Give
            the random drink button a whirl or start over below!
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content=" FEELIN LUCKY"
            labelPosition="left"
            icon="shuffle"
            onClick={() => setOpen(false)}
            href={"/random"}
            className="bttnClock"
          />
          <Button
            content="TAKE ME DRUNK, I'M HOME"
            labelPosition="right"
            icon="home"
            onClick={() => setOpen(false)}
            href={"/"}
            className="bttnCoClock"
          />{" "}
        </Modal.Actions>
      </Modal>
      <MainMenu />
    </>
  );
};
