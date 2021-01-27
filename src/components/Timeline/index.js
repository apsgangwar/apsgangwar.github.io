import React, { Component } from "react";
import * as cx from "classnames";

import * as s from "./timeline.module.scss";

class Timeline extends Component {
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

export default Timeline;
