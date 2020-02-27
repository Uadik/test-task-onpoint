import React, { useEffect, useRef } from 'react';

export default function Parallax(props) {
  const state = {
    prevY: 0,
    speed: props.speed || 1,
    height: props.height || '100%',
    width: props.width || '100%',
    top: props.top || '0%',
    left: props.left,
    right: props.right,
    position: 'absolute',
    zIndex: props.zindex || 0,

    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: props.color || null,
    backgroundImage: `url(${props.image})`
  };

  const parallaxElement = useRef();

  useEffect(() => {
    state.prevY = parallaxElement.current.getBoundingClientRect().top;
    props.relElement.current.addEventListener(
      'scroll',
      throttle(handleScroll, 50)
    );
    return () => {
      props.relElement.current.removeEventListener(
        'scroll',
        throttle(handleScroll, 50)
      );
    };
  });

  const throttle = (fn, wait) => {
    let time = Date.now();

    return function() {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  };

  const handleScroll = () => {
    const speed = props.speed;
    const newY = parallaxElement.current.getBoundingClientRect().top;

    const newTop = state.prevY + (newY - state.prevY) * speed;

    // TODO: дописать логику перемещения элемента

    // console.log('prev ' + state.prevY);
    // console.log('new ' + newY);

    // parallaxElement.current.style.top = `${newTop}px`;
    state.prevY = newY;
  };

  return (
    <div ref={parallaxElement} style={{ ...state }}>
      {props.children}
    </div>
  );
}
