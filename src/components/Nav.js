import React from "react";
import { Hamburger } from "./Hamburger";
import headerImage from'../images/headerImage.png';

export const Nav = () => {
  return (

    <>
      <div className="NavContainer">
        {/* <img
          //src="https://i.ibb.co/Yt8JQjJ/flamingo-logo3.png"
          src={headerImage}
          className="headerImage"
          alt="Dipicts a hand placing a cherry in a drink next to a shaker. Words read, Sip Savor and Stir: Choose Your Own Adventure."
        /> */}
        {/* <a href="/">
          <div className="navText">SWIZZLE HUB</div>
        </a> */}

        <Hamburger />
      </div>
    </>
  );
};
