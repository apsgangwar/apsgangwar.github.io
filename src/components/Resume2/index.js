import React, { Component } from 'react';
import * as cx from 'classnames';

import MeMain from '../../assets/pics/meMain.jpeg';

import * as s from './Resume.module.scss';

class Resume extends Component {
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
          <div className={s.page}>
            <div className={s.left}>
              <h1 className={s.heading}>Apoorva Singh Gangwar</h1>
              <div className={s.tab}>
                <div className={s.main}>WORK EXPERIENCE</div>
                <div className={s.heading1}>
                  <span className={s.cname}>
                    Zettabytes Inc., Bangalore |
                    <span className={s.crole}>
                      &nbsp;Member of Techical Staff
                    </span>
                  </span>
                  <span className={s.cdate}>[May'19 - Present]</span>
                </div>
                <div className={s.heading2}>cxsbcshbcxbsnksmlcknvjldnx</div>
                <div className={s.para}>
                  <li>cdcsx</li>
                  <li>cdcsx</li>
                  <li>cdcsx</li>
                </div>

                <div className={s.heading1}>
                  <span className={s.cname}>
                    Aggrego Services, Mumbai |
                    <span className={s.crole}>
                      &nbsp;Business Intelligence Intern
                    </span>
                  </span>
                  <span className={s.cdate}>[May'19 - Jul'19]</span>
                </div>
                <div className={s.heading2}>cxsbcshbcxbsnksmlcknvjldnx</div>
                <div className={s.para}>
                  <li>
                    Awarded Letter of Recommendation for exemplary performance
                    as a business analyst from Country Operations Manager
                  </li>
                  <li>
                    Analyzed <span>Non-Productive Time (NPT)</span> from Daily
                    Operations Reports (DORs) of last 12 months for 4 different
                    drilling rigs
                  </li>
                  <li>
                    Implemented the results of Non-Performing Time analysis on
                    Zoho Dashboard for quick insight into the key metrics
                  </li>
                  <li>
                    Integrated and optimized the Preventive Maintenance Schedule
                    for different drilling equipment (Top Drive System,
                    Draw-works Assembly, Blow-Out Preventer, Engines, Mud
                    Cleaner, etc.) to ensure a differentiated client experience
                  </li>
                  <li>
                    Developed the PM checklists for the systematic time-saving
                    and record tracking inspections of the drilling equipment
                  </li>
                </div>
              </div>

              <div className={s.tab}>
                <div className={s.main}>WORK EXPERIENCE</div>
                <div className={s.heading1}>
                  <span className={s.cname}>
                    Zettabytes Inc., Bangalore |
                    <span className={s.crole}>
                      &nbsp;Member of Techical Staff
                    </span>
                  </span>
                  <span className={s.cdate}>[May'19 - Jul'19]</span>
                </div>
                <div className={s.heading2}>cxsbcshbcxbsnksmlcknvjldnx</div>
                <div className={s.para}>
                  <li>cdcsx</li>
                  <li>cdcsx</li>
                  <li>cdcsx</li>
                </div>

                <div className={s.heading1}>
                  <span className={s.cname}>
                    Zettabytes Inc., Bangalore |
                    <span className={s.crole}>
                      &nbsp;Member of Techical Staff
                    </span>
                  </span>
                  <span className={s.cdate}>[May'19 - Jul'19]</span>
                </div>
                <div className={s.heading2}>cxsbcshbcxbsnksmlcknvjldnx</div>
                <div className={s.para}>
                  <li>cdcsx</li>
                  <li>cdcsx</li>
                  <li>cdcsx</li>
                </div>
              </div>
            </div>
            <div className={s.right}>
              <img src={MeMain} className={s.pic}></img>

              <div className={s.contact}>
                <a
                  // href="mailto:apoorvasinghgangwar@gmail.com"
                  className={s.socialIcon}
                >
                  <span className='fa fa-phone-square'></span>
                  <p>+91 - 9400000041</p>
                </a>

                <a
                  // href="mailto:apoorvasinghgangwar@gmail.com"
                  className={s.socialIcon}
                >
                  <span className='fa fa-calendar'></span>
                  <p>DOB: xx September 19xx</p>
                </a>

                <a
                  // href="mailto:apoorvasinghgangwar@gmail.com"
                  className={s.socialIcon}
                >
                  <span className='fa fa-envelope'></span>
                  <p>apooooogw000ar@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
