import { Component } from "react";
import * as s from "./container.module.scss";

class Container extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.defaultContainer}>{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
