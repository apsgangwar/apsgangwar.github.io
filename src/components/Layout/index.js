import { Component } from "react";
import * as s from "./layout.module.scss";
// import Footer from "../Footer";
import Header from "../Header";

import HomePage from "../HomePage";
import AboutMe from "../AboutMe";
import Academics from "../Academics";
import Projects from "../Projects";
import Timeline from "../Timeline";
import Resume from "../Resume";

import Container from "../Container";
import Menu from "../Menu";

const pageList = [
  { title: "Home", type: "HomePage" },
  // { title: "About Me", type: "AboutMe" },
  // { title: "Academics", type: "Academics" },
  // { title: "Projects", type: "Projects" },
  // { title: "Timeline", type: "Timeline" },
  // { title: "Resume", type: "Resume" },
  // { title: "Resume", type: "Contact" },
  // { title: "Resume", type: "Blog/Portfolio Tabs" },
  // { title: "Resume", type: "Blog Single" },
];

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToShow: { title: "Home", type: "HomePage" },
    };
  }

  render() {
    const { pageToShow } = this.state;

    return (
      <div className={s.container}>
        <div className={s.headerContainer}>
          <Header
            pageList={pageList}
            activePage={pageToShow}
            handleScreen={(page) => this.setState({ pageToShow: page })}
          />
        </div>
        <div className={s.mainContainer}>
          <div className={s.menuContainer}>
            <Menu
              pageList={pageList}
              activePage={pageToShow}
              handleScreen={(page) => this.setState({ pageToShow: page })}
            />
          </div>
          <div className={s.pageContainer}>
            {pageToShow.type === "HomePage" && <HomePage />}
            {pageToShow.type !== "HomePage" && (
              <Container>
                {pageToShow.type === "AboutMe" && <AboutMe />}
                {pageToShow.type === "Academics" && <Academics />}
                {pageToShow.type === "Projects" && <Projects />}
                {pageToShow.type === "Timeline" && <Timeline />}
                {pageToShow.type === "Resume" && <Resume />}
              </Container>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
