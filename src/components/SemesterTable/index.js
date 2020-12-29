import React, { Component } from "react";
import * as cx from "classnames";

import * as s from "./semesterTable.module.scss";

class SemesterTable extends Component {
  render() {
    const { data = [], theme = "Light" } = this.props;

    const tableRows = data.map((eachRowData, i) => {
      return (
        <div key={i} className={s.eachData}>
          <p className={s.code}>{eachRowData["courseCode"]} </p>
          <p className={s.course}>{eachRowData["courseName"]}</p>
        </div>
      );
    });

    const ContainerStyles = cx(s.container, {
      [s.containerDark]: theme === "Dark",
    });

    return (
      <>
        <div className={ContainerStyles}>
          <div className={s.table}>
            <div className={s.singleRow}>{tableRows}</div>
          </div>
        </div>
      </>
    );
  }
}

export default SemesterTable;
