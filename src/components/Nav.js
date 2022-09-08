import React from 'react'
import reactLogo from "../images/React-icon.svg.png";
import "../style.css"

export default function Header() {
  return (
    <nav className="nav">
      <img className="nav--icon" src={reactLogo} alt='some value' />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">
        React Course - Project 1
      </h4>
    </nav>
  )
}