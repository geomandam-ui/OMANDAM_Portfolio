import React from "react";
import { Link } from "react-scroll";
import "./App.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="About" smooth={true} duration={600} offset={-70}>About</Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} duration={600} offset={-70}>Projects</Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={600} offset={-70}>Skills</Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={600} offset={-70}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
