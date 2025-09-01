import React from 'react'
import { Link } from 'react-router'
import CompanyLogo from "../assets/footer-logo.svg";

function Footer() {
  return (
    <footer>
        <div className="logo-section">
        <Link to="/"><img src={CompanyLogo} alt="company-logo" /></Link>
      </div>
      <nav>
        <Link to="about" >About</Link>
        <Link to="location">Location</Link>
        <Link to="careers"> Careers</Link>
      </nav>
    </footer>
  )
}

export default Footer