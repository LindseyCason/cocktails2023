import React, { useState } from "react";
import { Search } from "./Search";
import { FaSearch } from "react-icons/fa";

export const NavSide = () => {





  return (

    <div className="sideNav">
      <table>
      <tr>
        <a href="/Brandy" id="navLinks">Brandy</a>
        </tr>
        <tr>
        <a href="/Champagne" id="navLinks">Champagne</a>
        </tr>
        <tr>
        <a href="/Gin" id="navLinks">Gin</a>
        </tr>
        <tr>
        <a href="/Rum" id="navLinks">Rum</a>
        </tr>
        <tr>
        <a href="/Scotch" id="navLinks">Scotch</a>
        </tr>
        <tr>
        <a href="/Tequila" id="navLinks">Tequila</a>
        </tr>
        <tr>
        <a href="/Non-Alcoholic" id="navLinks">Mocktail</a>
        </tr>
        <tr>
        <a href="/Random" id="navLinks">Random</a>
        </tr>
        <tr>
        </tr>
      </table>
    </div>
  );
};
