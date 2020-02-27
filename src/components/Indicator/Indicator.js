import React from 'react';
import './Indicator.css';

const Indicator = ({ screenCount, currentScreen }) => {
  let dots = [];
  for (let i = 0; i < screenCount; i++) {
    const className = i === currentScreen ? 'dot active' : 'dot';
    dots.push(<div className={className} key={i} />);
  }
  return <div className="indicator">{dots}</div>;
};

export default Indicator;
