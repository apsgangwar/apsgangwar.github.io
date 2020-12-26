import React, { Component } from "react";
import * as cx from "classnames";

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
          <div className={s.optionContainer}>
            <div>Home</div>
            <div>About</div>
            <div>Work</div>
            <div>Resume</div>
            <div>Contact</div>
            <div>Blog/Portfolio Tabs</div>
            <div>Projects done by me</div>
            <div>TimeLine</div>
            <div>Blog Single</div>
          </div>
          <div className={s.pagesContainer}></div>
        </div>
      </>
    );
  }
}

export default App;
