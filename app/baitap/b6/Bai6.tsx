import React from 'react'
import './bai6.scss'
export default function Bai6() {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <a href="/" className="nav-logo-link">Logo</a>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
