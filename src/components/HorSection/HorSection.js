import React, { useRef } from 'react';
import './HorSection.css';

const HorSection = props => {
  const myRef = useRef();
  props.addItem({ label: props.label, ref: myRef });
  props.addRef(myRef);
  return (
    <div ref={myRef} className="hor-section">
      {props.children}
    </div>
  );
};

export default HorSection;
