import React, { Component } from "react";
import * as cx from "classnames";

import myIcon from "../../assets/meMain.jpeg";

import * as s from "./resume.module.scss";

class Resume extends Component {
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
            </div>
          </div>
          <div className={s.pagesContainer}>jjhcw</div>
        </div>
      </>
    );
  }
}

export default Resume;
