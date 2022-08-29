import React, { Component } from 'react';
import * as cx from 'classnames';

import * as s from './OnlyPage.module.scss';

class OnlyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.typeAndErase();
  }

  typeAndErase() {
    const typedTextSpan = document.getElementById('typed-text');
    const cursorSpan = document.getElementById('cursor');

    const textArray = [
      'Full Stack Developer',
      'DevOps Engineer',
      'Cloud Native Developer',
      'Software Engineer',
    ];
    const typingDelay = 80;
    const erasingDelay = 10;
    const newTextDelay = 800;
    let textArrayIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing'))
          cursorSpan.classList.add('typing');
        typedTextSpan.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
          cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay);
      }
    };

    if (textArray.length) setTimeout(type, 250);
  }

  render() {
    const ContainerStyles = cx(s.container, {
      [s.containerLite]: false,
    });

    return (
      <div className={ContainerStyles}>
        {/* <div className={s.header}></div> */}
        <div className={s.containerPic}>
          <div className={s.overlay}> </div>
          <div className={s.content}>
            <div className={s.h1}>Hello I'm</div>
            <h2 className={s.name}>Apoorva Singh Gangwar</h2>
            <h4 className='ban-t'>
              I’m a Passionate <span id='typed-text'></span>
              <span id='cursor'></span>
            </h4>
          </div>
          <div className={s.footer}>
            <div className={s.socialIconContainer}>
              <a
                href='mailto:apoorvasinghgangwar@gmail.com'
                className={s.socialIcon}
              >
                <span className='fa fa-envelope'></span>
              </a>
              <a
                href='https://github.com/apsgangwar'
                target='_blank'
                rel='noopener noreferrer'
                className={s.socialIcon}
              >
                <span className='fa fa-github'></span>
              </a>
              {/* <a
                href='https://twitter.com/gangwar_aps'
                target='_blank'
                rel='noopener noreferrer'
                className={s.socialIcon}
              >
                <span className='fa fa-twitter'></span>
              </a> */}
              <a
                href='https://www.linkedin.com/in/apoorva-singh-gangwar-345336129/'
                target='_blank'
                rel='noopener noreferrer'
                className={s.socialIcon}
              >
                <span className='fa fa-linkedin'></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OnlyPage;
