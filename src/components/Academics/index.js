import React, { Component } from "react";
import * as cx from "classnames";

import * as s from "./academics.module.scss";

import sem1Data from "../../assets/semester/sem1.json";
import sem2Data from "../../assets/semester/sem2.json";
import sem3Data from "../../assets/semester/sem3.json";
import sem4Data from "../../assets/semester/sem4.json";
import sem5Data from "../../assets/semester/sem5.json";
import sem6Data from "../../assets/semester/sem6.json";
import sem7Data from "../../assets/semester/sem7.json";
import sem8Data from "../../assets/semester/sem8.json";

import downArrow from "../../assets/icons/downArrow.svg";
import upArrow from "../../assets/icons/upArrow.svg";

import SemesterTable from "../SemesterTable";

class Academics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSem1: false,
      showSem2: false,
      showSem3: false,
      showSem4: false,
      showSem5: false,
      showSem6: false,
      showSem7: false,
      showSem8: false,
    };
  }

  async componentDidMount() {}

  render() {
    const {
      showSem1,
      showSem2,
      showSem3,
      showSem4,
      showSem5,
      showSem6,
      showSem7,
      showSem8,
    } = this.state;

    const { theme = "Light" } = this.props;

    const ContainerStyles = cx(s.container, {
      [s.containerLite]: false,
    });

    return (
      <>
        <div className={ContainerStyles}>
          <div className={s.education}>SSC (CLASS - X)</div>
          <div className={s.toggleBar}>
            <div className={s.title}>
              <div>C. P. Vidya Niketan, Farrukhabad</div>
              <div className={s.placeholder}>
                (Indian Certificate of Secondary Education Examination)
              </div>
              <div>Year 2013</div>
            </div>
          </div>

          <div className={s.education}>HSC (CLASS - XII)</div>
          <div className={s.toggleBar}>
            <div className={s.title}>
              <div>C. P. Vidya Niketan, Farrukhabad</div>
              <div className={s.placeholder}>
                (Indian School Certificate Examination)
              </div>
              <div>Year 2015</div>
            </div>
          </div>

          <div className={s.education}>Graduation</div>
          <div className={s.toggleBar}>
            <div className={s.title}>
              <div>Indian Institute of Technology (IIT) Bombay, Mumbai</div>
              <div className={s.placeholder}>
                (Bachelor of Technology in Aerospace Engineering)
              </div>
              <div>Year 2020</div>
            </div>
          </div>

          <div
            className={s.toggleBar}
            onClick={() => this.setState({ showSem1: !showSem1 })}
          >
            <div className={s.title}>
              <div>{`${"1st"}`} Semester</div>
              <div>July '16 - Nov '16</div>
            </div>
            <div className={s.toggleButtons}>
              {!showSem1 && (
                <img src={downArrow} alt="" className={s.iconArrow} />
              )}
              {showSem1 && <img src={upArrow} alt="" className={s.iconArrow} />}
            </div>
          </div>
          {showSem1 && (
            <div className={s.tableContainer}>
              <SemesterTable data={sem1Data} theme={theme} />
            </div>
          )}

          <div
            className={s.toggleBar}
            onClick={() => this.setState({ showSem2: !showSem2 })}
          >
            <div className={s.title}>
              <div>{`${"2nd"}`} Semester</div>
              <div>July '16 - Nov '16</div>
            </div>
            <div className={s.toggleButtons}>
              {!showSem2 && (
                <img src={downArrow} alt="" className={s.iconArrow} />
              )}
              {showSem2 && <img src={upArrow} alt="" className={s.iconArrow} />}
            </div>
          </div>
          {showSem2 && (
            <div className={s.tableContainer}>
              <SemesterTable data={sem2Data} theme={theme} />
            </div>
          )}

          <div
            className={s.toggleBar}
            onClick={() => this.setState({ showSem3: !showSem3 })}
          >
            <div className={s.title}>
              <div>{`${"3rd"}`} Semester</div>
              <div>July '16 - Nov '16</div>
            </div>
            <div className={s.toggleButtons}>
              {!showSem3 && (
                <img src={downArrow} alt="" className={s.iconArrow} />
              )}
              {showSem3 && <img src={upArrow} alt="" className={s.iconArrow} />}
            </div>
          </div>
          {showSem3 && (
            <div className={s.tableContainer}>
              <SemesterTable data={sem3Data} theme={theme} />
            </div>
          )}

          <div
            className={s.toggleBar}
            onClick={() => this.setState({ showSem4: !showSem4 })}
          >
            <div className={s.title}>
              <div>{`${"4th"}`} Semester</div>
              <div>July '16 - Nov '16</div>
            </div>
            <div className={s.toggleButtons}>
              {!showSem4 && (
                <img src={downArrow} alt="" className={s.iconArrow} />
              )}
              {showSem4 && <img src={upArrow} alt="" className={s.iconArrow} />}
            </div>
          </div>
          {showSem4 && (
            <div className={s.tableContainer}>
              <SemesterTable data={sem4Data} theme={theme} />
            </div>
          )}

          <div
            className={s.toggleBar}
            onClick={() => this.setState({ showSem5: !showSem5 })}
          >
            <div className={s.title}>
              <div>{`${"5th"}`} Semester</div>
              <div>July '16 - Nov '16</div>
            </div>
            <div className={s.toggleButtons}>
              {!showSem5 && (
                <img src={downArrow} alt="" className={s.iconArrow} />
              )}
              {showSem5 && <img src={upArrow} alt="" className={s.iconArrow} />}
            </div>
          </div>
          {showSem5 && (
            <div className={s.tableContainer}>
              <SemesterTable data={sem5Data} theme={theme} />
            </div>
          )}

          <div
            className={s.toggleBar}
            onClick={() => this.setState({ showSem6: !showSem6 })}
          >
            <div className={s.title}>
              <div>{`${"6th"}`} Semester</div>
              <div>July '16 - Nov '16</div>
            </div>
            <div className={s.toggleButtons}>
              {!showSem6 && (
                <img src={downArrow} alt="" className={s.iconArrow} />
              )}
              {showSem6 && <img src={upArrow} alt="" className={s.iconArrow} />}
            </div>
          </div>
          {showSem6 && (
            <div className={s.tableContainer}>
              <SemesterTable data={sem6Data} theme={theme} />
            </div>
          )}

          <div
            className={s.toggleBar}
            onClick={() => this.setState({ showSem7: !showSem7 })}
          >
            <div className={s.title}>
              <div>{`${"7th"}`} Semester</div>
              <div>July '16 - Nov '16</div>
            </div>
            <div className={s.toggleButtons}>
              {!showSem7 && (
                <img src={downArrow} alt="" className={s.iconArrow} />
              )}
              {showSem7 && <img src={upArrow} alt="" className={s.iconArrow} />}
            </div>
          </div>
          {showSem7 && (
            <div className={s.tableContainer}>
              <SemesterTable data={sem7Data} theme={theme} />
            </div>
          )}

          <div
            className={s.toggleBar}
            onClick={() => this.setState({ showSem8: !showSem8 })}
          >
            <div className={s.title}>
              <div>{`${"8th"}`} Semester</div>
              <div>July '16 - Nov '16</div>
            </div>
            <div className={s.toggleButtons}>
              {!showSem8 && (
                <img src={downArrow} alt="" className={s.iconArrow} />
              )}
              {showSem8 && <img src={upArrow} alt="" className={s.iconArrow} />}
            </div>
          </div>
          {showSem8 && (
            <div className={s.tableContainer}>
              <SemesterTable data={sem8Data} theme={theme} />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Academics;
