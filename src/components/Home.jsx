import "../styles/Home.css";
import Bootstrap from "../assets/Bootstrap.svg";
import NodeJs from "../assets/NodeJs.svg";
import HTML from "../assets/HTML.svg";
import JavaScript from "../assets/logos_javascript.svg";
import React from "../assets/React.svg";
import CSS from "../assets/CSS.svg";
import ProfilePhoto from "../assets/ProfilePhoto.svg";
import MailIcon from "../assets/MailIcon.svg";
import DownloadIcon from "../assets/DownloadIcon.svg";
import GithubIcon from "../assets/GithubIcon.svg";
import Saly from "../assets/Saly-13.svg";

const Home = () => {
  return (
    <div className="mycontainer">
      <div className="home">
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
          <div className="tech-stack">
            <img src={Bootstrap} alt="" />
            <img src={NodeJs} alt="" />
            <img src={HTML} alt="" />
            <img src={JavaScript} alt="" />
            <img src={React} alt="" />
            <img src={CSS} alt="" />
          </div>
          <div className="contact-me">
            <img src={ProfilePhoto} alt="" />
            <div className="info">
              <a>
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
        <div className="Picture">
          {/* <div className="ellipse"></div> */}
          <img className="saly" src={Saly} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
