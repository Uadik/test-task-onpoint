import React from 'react';
import './Slider.css';

export default function Slider(props) {
  const { items } = props;

  const scrollTo = ref => () => {
    // ReactDOM.findDOMNode(ref.current).scrollIntoView({ behavior: 'smooth' });
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  let currentItem = 0;
  let maxVal = 100;

  const ranges = items.length;
  const range = Math.ceil(maxVal / ranges);
  maxVal = range * ranges;

  const checkScroll = event => {
    let point = Math.ceil(event.target.value / range) - 1;
    if (currentItem !== point) {
      scrollTo(items[point].ref)();
      currentItem = point;
    }
  };

  return (
    <div>
      <input
        className="slider"
        type="range"
        onChange={checkScroll}
        min="1"
        max={maxVal}
        // value={items.length - 1}
        step="1"
        list="marks"
      />
      <datalist id="marks">
        {items.map(item => {
          return (
            <option value={maxVal / items.length} label={item.label}></option>
          );
        })}
      </datalist>
    </div>
  );
}

//<div className="buttons">
//{items.map(item => {
//  return <button onClick={scrollTo(item.ref)}>{item.label}</button>;
//})}
//</div>

// 2
// 1                         2
// 0 ======================= 99

// 3
// 1            2            3
// 0 ======================= 99

// 4
// 1        2        3       4
// 0 ======================= 99

// 5
// 1    2       3       4    5
// 0 ======================= 99
