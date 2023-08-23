import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { useState } from "react";

const Navbar = ({ styleBody }) => {
  const [lightMode, setLightMode] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navClass = "nav-list";

  function toggleNavbar() {
    setToggle(!toggle);
  }

  function handleLightMode() {
    setLightMode(!lightMode);
    if (toggle) {
      styleBody();
    }
  }
  return (
    <div className="mycontainer">
      <nav className="Navbar">
        <div className="logo">
          <p>
            <Link to={"/"} className="logo">
              Abimbola.
            </Link>
          </p>
        </div>
        <div className="other">
          <ul className={`${navClass} ${toggle ? "toggled" : null}`}>
            <li>
              <Link className="link" to={"/Projects"}>
                Projects
              </Link>
            </li>
            <li>
              <Link className="link">Download Resume</Link>
            </li>
            <li>
              <a
                href="https://abimbola.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Blog
              </a>
            </li>
            <li>
              <Link className="link" to={"/Contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <img
              onClick={handleLightMode}
              src={lightMode ? MoonIcon : SunIcon}
              alt=""
            />
          </div>
          <div className="hamburger" onClick={toggleNavbar}>
            <div className="burger one"></div>
            <div className="burger two"></div>
            <div className="burger three"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
