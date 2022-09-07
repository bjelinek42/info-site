import React from 'react'
import reactLogo from "../images/react-logo.png";
import "../style.css"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="image" src={{ reactLogo }} alt='some value' />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}