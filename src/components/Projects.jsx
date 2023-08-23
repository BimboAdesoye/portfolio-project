import "../styles/Projects.css";
import webIcon from "../assets/webIcon.svg";
import DownloadIcon from "../assets/DownloadIcon.svg";
import GithubIcon from "../assets/GithubIcon.svg";
import ProfilePhoto from "../assets/ProfilePhoto.svg";
import MailIcon from "../assets/MailIcon.svg";
import { Link } from "react-router-dom";
import LineIcon from "../assets/LineIcon.svg";

const Projects = () => {
  return (
    <div className="mycontainer">
      <div className="project-section">
        <div className="developer">
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
              <span>
                01 <img src={LineIcon} alt="" />
                Projects
              </span>
              <span>
                02 <img src={LineIcon} alt="" />
                Download Resume
              </span>
              <span>
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
        <div className="projects">
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
      </div>
    </div>
  );
};

export default Projects;
