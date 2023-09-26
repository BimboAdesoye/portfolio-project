import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import myResume from "../assets/wallicestenesResume.pdf";

import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navClass = "nav-list";

  function toggleNavbar() {
    setToggle(!toggle);
    console.log("yes");
  }

  return (
    <div className="mycontainer">
      <nav className="Navbar">
        <div className="logo">
          <span>
            <Link to={"/"} className="logo">
              Abimbola.
            </Link>
          </span>
        </div>
        <div className="other">
          <ul className={`${navClass} ${toggle ? "toggled" : null}`}>
            <li>
              <Link className="link" to={"/Projects"}>
                Projects
              </Link>
            </li>
            <li>
              <a href="../assets/wallicestenesResume.pdf" download={myResume}>
                Download Resume
              </a>
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
          </ul>
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
