import React, { Component } from "react";
import * as cx from "classnames";

import * as s from "./homePage.module.scss";

class HomePage extends Component {
  componentDidMount() {
    this.typeAndErase();
  }

  typeAndErase() {
    const typedTextSpan = document.getElementById("typed-text");
    const cursorSpan = document.getElementById("cursor");

    const textArray = [
      "Cloud Native Developer",
      "Big Data Analyst",
      "Web Developer",
    ];
    const typingDelay = 200;
    const erasingDelay = 10;
    const newTextDelay = 100;
    let textArrayIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(
          charIndex
        );
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay);
      }
    };

    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }

  render() {
    const ContainerStyles = cx(s.container, {
      [s.containerLite]: false,
    });

    return (
      <>
        <div className={ContainerStyles}>
          <div className={s.overlay}> </div>
          <div className={s.content}>
            <h2>Hello !!</h2>
            <h1>I'm</h1>
            <div>Apoorva Singh Gangwar</div>
            <h4 className="ban-t">
              I’m a Passionate <span id="typed-text"></span>
              <span id="cursor"></span>
            </h4>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
