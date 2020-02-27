import React, { useRef, useState, useEffect } from 'react';
import Indicator from '../Indicator/Indicator';
import './ScrollableContainer.css';
import Parallax from '../Parallax/Parallax';

const ScrollableContainer = props => {
  const { children, draggableScreens, currentScreen, setCurrentScreen } = props;
  const [verticalScreens, setSections] = useState([]);
  const elementContainer = useRef();

  let state = {
    isScrolling: false,
    clientY: 0,
    scrollY: 0,
    startY: 0
  };

  let temp = [];
  const addVerticalSection = ref => {
    temp.push(ref);
  };

  useEffect(() => {
    if (verticalScreens.length !== temp.length) setSections(temp);
  });

  const onMouseDown = event => {
    if (draggableScreens.map(screen => screen.current).includes(event.target))
      state = {
        ...state,
        isScrolling: true,
        clientY: event.clientY,
        startY: event.clientY
      };
  };

  const onMouseUp = () => {
    state.isScrolling = false;

    if (state.startY === state.clientY) return;

    const threshold = 180; //px

    let next;

    if (state.startY - state.clientY > threshold) {
      next = currentScreen + 1;
    } else if (state.startY - state.clientY < -threshold) {
      next = currentScreen - 1;
    } else next = currentScreen;

    if (next >= verticalScreens.length) next = verticalScreens.length - 1;
    else if (next < 0) next = 0;

    if (verticalScreens[next]) {
      verticalScreens[next].current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const onMouseMove = event => {
    if (state.isScrolling) {
      const { clientY, scrollY } = state;
      elementContainer.current.scrollTop += clientY - event.clientY;
      // state.scrollY = scrollY + (clientY - event.clientY);
      state.clientY = event.clientY;
    }
  };

  const onScroll = e => {
    let idx = elementContainer.current.scrollTop / window.innerHeight;
    idx = idx < 0.03 ? 0 : Math.ceil(idx);

    if (idx !== currentScreen) setCurrentScreen(idx);
  };

  const throttle = (fn, wait) => {
    let time = Date.now();

    return function() {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  };

  return (
    <div
      ref={elementContainer}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onScrollCapture={throttle(onScroll, 100)}
      className="container"
    >
      <Indicator
        screenCount={verticalScreens.length}
        currentScreen={currentScreen}
      />
      {React.Children.map(children, element => {
        if (element.type.name === 'Screen')
          return React.cloneElement(element, {
            addSection: addVerticalSection
          });
        else return element;
      })}
      {/* {elementContainer ? (
        <Parallax
          relElement={elementContainer}
          speed={0.5}
          zindex="1"
          top="80%"
          height="200px"
          width="200px"
          color="#efb"
        />
      ) : null} */}
    </div>
  );
};

export default ScrollableContainer;
