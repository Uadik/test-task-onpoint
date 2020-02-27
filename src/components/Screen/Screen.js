import React, { useRef } from 'react';
import './Screen.css';

const Screen = props => {
  const myRef = useRef();
  props.addRef(myRef);
  props.addSection(myRef);

  const style = {
    background: `url('${props.imageURI}') no-repeat center center/cover`
  };

  return (
    <section ref={myRef} style={style} id={props.id}>
      {props.children}
    </section>
  );
};

export default Screen;
