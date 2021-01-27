import { Component } from "react";
import cx from "classnames";

import Menu from "../Menu/";
import * as s from "./header.module.scss";
import myIcon from "../../assets/pics/meMain.jpeg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  render() {
    const { pageList, handleScreen, activePage } = this.props;
    const { showMenu } = this.state;

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //   var currentScrollPos = window.pageYOffset;
    //   const elem = document.getElementsByClassName(`${s.header}`)[0];
    //   console.log(34, elem);
    //   // if (!isNavExpanded) {
    //   if (prevScrollpos > currentScrollPos) {
    //     elem.style.display = "block";
    //   } else {
    //     elem.style.display = "none";
    //   }
    //   // }
    //   prevScrollpos = currentScrollPos;
    // };
    // console.log(22, window.pageYOffset);

    const menuStyles = cx(s.hamburgerMenuOverlay, {
      [s.hamburgerMenuOverlayHide]: !showMenu,
    });
    return (
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.floatLeft}>
            <div
              className={s.hamburgerIcon}
              onClick={() => {
                this.setState({ showMenu: !showMenu });
              }}
            >
              <div className={s.hamburger}></div>
              <div className={s.hamburger}></div>
              <div className={s.hamburger}></div>
            </div>
            <div className={s.activePage}>{activePage.title}</div>
          </div>

          <div className={s.myInfo}>
            <p>Apoorva Singh Gangwar</p>
            <img src={myIcon} alt="" className={s.icon} />
          </div>
        </div>
        <div className={menuStyles}>
          <div
            className={s.emptyContainer}
            onClick={() => {
              this.setState({ showMenu: !showMenu });
            }}
          ></div>
          <div className={s.menuContainer}>
            <Menu
              pageList={pageList}
              activePage={activePage}
              handleScreen={(page) => {
                this.setState({ showMenu: !showMenu });
                handleScreen(page);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
