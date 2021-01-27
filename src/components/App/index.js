import React, { Component } from "react";

import * as s from "./app.module.scss";

import Layout from "../Layout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <div className={s.container}>
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
