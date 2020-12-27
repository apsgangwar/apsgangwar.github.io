import React, { Component } from "react";
import * as cx from "classnames";

import myIcon from "../../assets/meMain.jpeg";

import * as s from "./app.module.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    const ContainerStyles = cx(s.container, {
      [s.containerLite]: false,
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
              <div className={cx(s.options, s.optionsSelected)}>Home</div>
              <div className={s.options}>About</div>
              <div className={s.options}>Academics</div>
              <div className={s.options}>Projects</div>
              <div className={s.options}>TimeLine</div>
              <div className={s.options}>Resume</div>
              <div className={s.options}>Contact</div>
              {/* <div className={s.options}>Blog/Portfolio Tabs</div>
              <div className={s.options}>Blog Single</div> */}
            </div>
            <div className={s.footerDiv}>
              <a
                href="https://www.linkedin.com/in/apoorva-singh-gangwar-345336129/"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIcon}
              >
                <span class="fa fa-linkedin"></span>
              </a>
              <a
                href="https://github.com/apsgangwar"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIcon}
              >
                <span class="fa fa-github"></span>
              </a>
              <a
                href="https://twitter.com/gangwar_aps"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIcon}
              >
                <span class="fa fa-twitter"></span>
              </a>
              <a
                href="mailto:apoorvasinghgangwar@gmail.com"
                className={s.socialIcon}
              >
                <span class="fa fa-envelope"></span>
              </a>
            </div>
          </div>
          <div className={s.pagesContainer}>jjhcw</div>
        </div>
      </>
    );
  }
}

export default App;
