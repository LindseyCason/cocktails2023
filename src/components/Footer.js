import React from "react";
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaPhoneSquare,
  FaQuestionCircle,
  FaHome
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footContainer" id="footer">
            <a href="/home" className="footerIcon">
        <FaHome />
      </a>

      <a href="mailto:lindseyacason@gmail.com" className="footerIcon">
        <FaEnvelopeSquare />
      </a>
      <a href="https://www.github.com/lindseycason" className="footerIcon">
        <FaGithubSquare />
      </a>
      <a
          href="mailto:lindseyacason@gmail.com?subject=Suggestions%20or%20Comments&body=Hey%20there!%0D%0AThanks%20for%20reaching%20out!%20Feel%20free%20to%20send%20me%20any%20feedback%20you%20may%20have%20below.%0D%0AThank%20you!%0D%0ALindsey%20Cason%0D%0ASip,%20Savor%20&%20Stir"
          target="_blank"
        rel="noreferrer"
        className="footerIcon"
      >
        <FaQuestionCircle />
      </a>
    
      

    </div>
  );
};
