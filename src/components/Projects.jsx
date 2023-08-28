import "../styles/Projects.css";
import webIcon from "../assets/webIcon.svg";
import DownloadIcon from "../assets/DownloadIcon.svg";
import GithubIcon from "../assets/GithubIcon.svg";
import ProfilePhoto from "../assets/ProfilePhoto.svg";
import MailIcon from "../assets/MailIcon.svg";
import { Link } from "react-router-dom";
import LineIcon from "../assets/LineIcon.svg";
import myResume from "../assets/wallicestenesResume.pdf"; 
import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState(true);

  function handleActive() {
    setActive(false);
  }

  function handleActive2() {
    setActive(true);
  }
  return (
    <div className="">
      <div className="project-section">
        <div className="developer mycontainer">
          <div className="logo">
            <span>
              <Link to={"/"} className="logo">
                Abimbola.
              </Link>
            </span>
          </div>
          <div className="profile">
            <p className="profile-title">Full Stack Developer</p>
            <h1 className="profile-name">Abimbola Adesoye</h1>
            <p className="profile-desc">
              I am Abimbola, a passionate frontend web developer dedicated to
              crafting seamless and engaging online experiences. With a keen eye
              for design and a proficiency in HTML, CSS, and JavaScript, I
              transform ideas into visually appealing and user-friendly websites
              that leave a lasting impression.
            </p>
            <div className="profile-links">
              <span onClick={handleActive2} className={active ? "focus" : null}>
                01 <img src={LineIcon} alt="" />
                Projects
              </span>
              <span>
                <a href="../assets/wallicestenesResume.pdf" download={myResume}>
                  02 <img src={LineIcon} alt="" />
                  Download Resume
                </a>
              </span>
              <span
                onClick={handleActive}
                className={active ? "null" : "focus"}
              >
                03 <img src={LineIcon} alt="" />
                Contact
              </span>
            </div>
            <div className="contact-me">
              <img src={ProfilePhoto} alt="" />
              <div className="info">
                <a href="mailto:bimboadesoye44@gmail.com">
                  <img src={MailIcon} alt="" />
                  <span className="email">Email Me</span>
                  <img src={DownloadIcon} alt="" />
                </a>
                <a
                  href="https://github.com/BimboAdesoye"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GithubIcon} alt="" />
                  <span className="github">Github</span>
                  <img src={DownloadIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-side">
          {active && (
            <div className="projects mycontainer">
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://bimbos-perfumery-e-commerce.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
              {/* Project */}
              <div className="project">
                <div className="stack">
                  <span>JavaScript, React & Node</span>
                </div>
                <div className="project-title">
                  PERFUMERY -
                  <br />
                  E-commerce Website
                </div>
                <div className="info">
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" />
                    <span className="email">Github</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                  <a
                    href="https://github.com/BimboAdesoye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={webIcon} alt="" />
                    <span className="github">Website</span>
                    <img src={DownloadIcon} alt="" />
                  </a>
                </div>
              </div>
              {/* Project */}
            </div>
          )}
          {!active && (
            <div className="contact-form mycontainer">
              <h1>Send a Message</h1>
              <form action="https://formspree.io/f/mjvqwpze" method="POST">
                <input required type="text" placeholder="From:" name="text" />
                <input
                  required
                  type="text"
                  placeholder="Subject:"
                  name="text"
                />
                <textarea
                  required
                  name="textarea"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write message..."
                ></textarea>
                <button>Send Message</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
