import React, { Component } from "react";
import * as cx from "classnames";

import HomePage from "../HomePage";
import AboutMe from "../AboutMe";
import Academics from "../Academics";
import Projects from "../Projects";
import Timeline from "../Timeline";
import Resume from "../Resume";

import * as s from "./app.module.scss";
import myIcon from "../../assets/meMain.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: false,
      showAboutMe: false,
      showAcademics: true,
      showProjects: false,
      showTimeline: false,
      showResume: false,
      currentPage: "Home",
    };
  }

  showThisPage(showThis, page) {
    this.setState({
      showHomePage: false,
      showAboutMe: false,
      showAcademics: false,
      showProjects: false,
      showTimeline: false,
      showResume: false,
      [showThis]: true,
      currentPage: page,
    });
  }

  async componentDidMount() {}

  render() {
    const {
      showHomePage,
      showAboutMe,
      showAcademics,
      showProjects,
      showTimeline,
      showResume,
      currentPage,
    } = this.state;

    const ContainerStyles = cx(s.container, {
      [s.containerDark]: false,
    });

    return (
      <>
        <div className={ContainerStyles}>
          <div className={s.optionsContainer}>
            <div className={s.nameDiv}>
              <img src={myIcon} alt="" className={s.icon} />
              <p>Apoorva Singh Gangwar</p>
            </div>
            <div className={s.optionsDiv}>
              <div
                className={cx(s.options, { [s.optionsSelected]: showHomePage })}
                onClick={() => this.showThisPage("showHomePage", "Home")}
              >
                Home
              </div>
              <div
                className={cx(s.options, { [s.optionsSelected]: showAboutMe })}
                onClick={() => this.showThisPage("showAboutMe", "About Me")}
              >
                About Me
              </div>
              <div
                className={cx(s.options, {
                  [s.optionsSelected]: showAcademics,
                })}
                onClick={() => this.showThisPage("showAcademics", "Academics")}
              >
                Academics
              </div>
              <div
                className={cx(s.options, { [s.optionsSelected]: showProjects })}
                onClick={() => this.showThisPage("showProjects", "Projects")}
              >
                Projects
              </div>
              <div
                className={cx(s.options, { [s.optionsSelected]: showTimeline })}
                onClick={() => this.showThisPage("showTimeline", "Timeline")}
              >
                TimeLine
              </div>
              <div
                className={cx(s.options, { [s.optionsSelected]: showResume })}
                onClick={() => this.showThisPage("showResume", "Resume")}
              >
                Resume
              </div>
              {/* <div className={s.options}>Contact</div>
              <div className={s.options}>Blog/Portfolio Tabs</div>
              <div className={s.options}>Blog Single</div> */}
            </div>
            <div className={s.footerDiv}>
              <a
                href="https://www.linkedin.com/in/apoorva-singh-gangwar-345336129/"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIcon}
              >
                <span className="fa fa-linkedin"></span>
              </a>
              <a
                href="https://github.com/apsgangwar"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIcon}
              >
                <span className="fa fa-github"></span>
              </a>
              <a
                href="https://twitter.com/gangwar_aps"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIcon}
              >
                <span className="fa fa-twitter"></span>
              </a>
              <a
                href="mailto:apoorvasinghgangwar@gmail.com"
                className={s.socialIcon}
              >
                <span className="fa fa-envelope"></span>
              </a>
            </div>
          </div>
          <div className={s.pagesContainer}>
            <div className={s.header}>
              <div>{currentPage}</div>
            </div>
            <div className={s.subContainer}>
              {showHomePage && <HomePage />}
              {showAboutMe && <AboutMe />}
              {showAcademics && <Academics />}
              {showProjects && <Projects />}
              {showTimeline && <Timeline />}
              {showResume && <Resume />}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
