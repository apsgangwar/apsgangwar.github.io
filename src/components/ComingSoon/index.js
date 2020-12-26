import React, { Component } from "react";
import * as cx from "classnames";

import * as s from "./comingSoon.module.scss";

class CommingSoon extends Component {
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
          <p>Coming Soon !!</p>
        </div>
      </>
    );
  }
}

export default CommingSoon;
