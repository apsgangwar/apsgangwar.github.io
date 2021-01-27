import React, { Component } from "react";
import * as cx from "classnames";

import * as s from "./menu.module.scss";

class Menu extends Component {
  async componentDidMount() {}

  render() {
    const ContainerStyles = cx(s.container, {
      [s.containerDark]: false,
    });

    const { pageList, handleScreen, activePage } = this.props;

    return (
      <div className={ContainerStyles}>
        {/* <div className={s.nameDiv}>
          <p>Apoorva Singh Gangwar</p>
        </div> */}
        <div className={s.optionsDiv}>
          {pageList.map((page, i) => {
            return (
              <div
                key={i}
                className={cx(s.options, {
                  [s.optionsSelected]: activePage.type === page.type,
                })}
                onClick={() => {
                  handleScreen(page);
                }}
              >
                {page.title}
              </div>
            );
          })}
        </div>
        <div className={s.footerDiv}>
          <p>Apoorva Singh Gangwar</p>
          <div className={s.socialIconContainer}>
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
      </div>
    );
  }
}

export default Menu;
