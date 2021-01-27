import React, { Component } from "react";
import * as cx from "classnames";

import * as s from "./projects.module.scss";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const ContainerStyles = cx(s.container, {
      [s.containerLite]: false,
    });

    return (
      <>
        <div className={ContainerStyles}>
          <p>Apoorva Singh Gangwar</p>
        </div>
      </>
    );
  }
}

export default Projects;
