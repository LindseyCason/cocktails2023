import React from "react";
import { Hamburger } from "./Hamburger";
import { Search } from "./Search";



export const Nav = () => {



  return (

    <>
      <div className="NavContainer">
        <a href="/">
          <div className="SSSLogo" />
        </a>
        <a href="/" id="navLinks">Home</a>
        <a href="/Random" id="navLinks">Random Drink</a>
        <a href="mailto:lindseyacason@gmail.com?subject=Suggestions%20or%20Comments&body=Hey%20there!%0D%0AThanks%20for%20reaching%20out!%20Feel%20free%20to%20send%20me%20any%20feedback%20you%20may%20have%20below.%0D%0AThank%20you!%0D%0ALindsey%20Cason%0D%0A"
          target="_blank"
        rel="noreferrer" id="navLinks">Contact Me</a>
        <Hamburger />
      </div>
    </>
  );
};
