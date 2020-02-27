import React from 'react';
import './HorScreen.css';
import Slider from '../Slider/Slider';

export default function HorScreen(props) {
  const items = [];
  const addItem = item => {
    items.push(item);
  };

  return (
    <>
      <div className="hor-container">
        {React.Children.map(props.children, element => {
          return React.cloneElement(element, { addItem: addItem });
        })}
      </div>
      <Slider items={items} />
    </>
  );
}
