import HamburgerIcon from "../assets/Images/hamburger.svg";
import { useEffect, useState } from "react";
import CompanyLogo from "../assets/logo.svg";
import CloseIcon from "../assets/Images/close.svg";
import { Link } from "react-router";

function Header() {
  const [displayWidth, setDisplayWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setDisplayWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (displayWidth > 768) setIsOpen(true);
    else setIsOpen(false);
  }, [displayWidth]);

  const handleClickLink = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <header className={isOpen ? "active" : ""}>
      <div className="logo-section">
        <Link to="/"><img src={CompanyLogo} alt="company-logo" /></Link>
      </div>
      <nav className={isOpen ? "active" : ""}>
        <Link to="about" onClick={handleClickLink}>About</Link>
        <Link to="location" onClick={handleClickLink}>Location</Link>
        <Link to="careers" onClick={handleClickLink}> Careers</Link>
        <button className={`contact-link ${isOpen ? "active" : ""}`} onClick={handleClickLink}>
          <Link to={"/contact-us"}>Get Scootin</Link>
        </button>
      </nav>

      <div
        className="hamburger-menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <img src={CloseIcon} alt="close-icon"/>: <img src={HamburgerIcon} alt="close-HamburgerIcon"/>}
      </div>
    </header>
  );
}

export default Header;
