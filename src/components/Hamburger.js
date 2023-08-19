import React, { useState } from "react";
import {
  FaCode,
  FaEnvelope,
  FaHamburger,
  FaPhone,
  FaQuestion,
  FaTimes,
  FaCaretSquareDown
} from "react-icons/fa";

export const Hamburger = () => {
  const [isVisible, setVisible] = useState("hamburgerMenuHidden");
  const [contactOpen, setContactOpen] = useState("contactMenuHidden");

  const toggleContact = () => {
    if (contactOpen === "contactMenuHidden") {
      setContactOpen("contactMenuShow");
    } else {
      setContactOpen("contactMenuHidden");
    }
  };
  const toggle = () => {
    if (isVisible === "hamburgerMenuHidden") {
      setVisible("hamburgerMenuShow");
    } else {
      setVisible("hamburgerMenuHidden");
    }
    if (contactOpen === "contactMenuShow") {
      setContactOpen("contactMenuHidden");
    } else {
      return;
    }
  };

  return (
    <>
      <a href className="hamMenu" onClick={toggle}>
        {isVisible === "hamburgerMenuHidden" ? (
          <FaCaretSquareDown className="hamIcon" />
        ) : (
          <FaTimes className="hamIcon" />
        )}
      </a>
      <div className={("hamburgerMenu", isVisible)}>
        <a href="/" className="hamLink">
          HOME
        </a>
        <a href="/random" className="hamLink">
          RANDOM DRINK
        </a>
        <a href className="hamLink" onClick={toggleContact}>
          CONTACT ME
        </a>
      </div>

      <div className={("contactMenu", contactOpen)}>
        <FaTimes className="contactIcon" onClick={toggleContact} />
        <a href="tel:15045643792" className="conLink">
          <FaPhone />: 504-564-3792
        </a>
        <a href="mailto:lindseyacason@gmail.com" className="conLink">
          <FaEnvelope />: LindseyACason@gmail.com
        </a>
        <a
          href="mailto:lindseyacason@gmail.com?subject=Suggestions%20or%20Comments%20from%20Swizzle%20Hub&body=Hey%20there!%0D%0AThanks%20for%20reaching%20out!%20Feel%20free%20to%20send%20me%20any%20feedback%20you%20may%20have%20below.%0D%0AThank%20you!%0D%0ALindsey%20Cason%0D%0ASwizzle%20Hub"
          target="_blank"
          rel="noreferrer"
          className="conLink"
        >
          <FaQuestion />: Suggestions or Comments?
        </a>
        <a href="https://github.com/LindseyCason/cocktail" className="conLink">
          <FaCode />: See the code
        </a>
      </div>
    </>
  );
};
