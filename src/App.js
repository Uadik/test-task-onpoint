import React, { useState, useRef } from 'react';
import './App.css';
import ScrollableContainer from './components/ScrollableContainer/ScrollableContainer';
import Screen from './components/Screen/Screen';
import HorScreen from './components/HorScreen/HorScreen';
import HorSection from './components/HorSection/HorSection';
import Parallax from './components/Parallax/Parallax';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  let allowedToDrag = [];
  const addDraggableScreen = ref => {
    allowedToDrag.push(ref);
  };
  return (
    <ScrollableContainer
      draggableScreens={allowedToDrag}
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
    >
      <Screen addRef={addDraggableScreen} id="slide1" imageURI="/page1.png">
        <div className="textblock">
          <h1>Всегда ли цели терапии СД2</h1>
          <h1>на поверхности?</h1>
        </div>
        <p id="label1">Цель по HbA1c</p>
        <p id="label2">Гипогликемия</p>
        <p id="label3">Осложнения СД</p>
        <p id="label4">СС риски</p>
        <div id="eclipse-1" className="eclipse eclipse-offset-1"></div>
        <div id="eclipse-1" className="eclipse eclipse-offset-2"></div>
        <div id="eclipse-1" className="eclipse eclipse-offset-3"></div>
        <div id="eclipse-2" className="eclipse eclipse-offset-1"></div>
        <div id="eclipse-2" className="eclipse eclipse-offset-2"></div>
        <div id="eclipse-2" className="eclipse eclipse-offset-3"></div>
        <div id="eclipse-3" className="eclipse eclipse-offset-1"></div>
        <div id="eclipse-3" className="eclipse eclipse-offset-2"></div>
        <div id="eclipse-3" className="eclipse eclipse-offset-3"></div>
        <div id="eclipse-4" className="eclipse eclipse-offset-1"></div>
        <div id="eclipse-4" className="eclipse eclipse-offset-2"></div>
        <div id="eclipse-4" className="eclipse eclipse-offset-3"></div>
        {currentScreen === 0 ? (
          <div id="scrollDown">
            <h4>Листайте вниз</h4>
          </div>
        ) : null}
      </Screen>
      <Screen addRef={addDraggableScreen} id="slide2" imageURI="/page2.png">
        <h1>
          Основа терапии —<br /> патогенез СД2
        </h1>
      </Screen>
      <Screen addRef={addDraggableScreen} id="slide3" imageURI="/page3.png">
        <HorScreen>
          <HorSection addRef={addDraggableScreen} label="111">
            <h2>Звенья патогенеза СД2</h2>
            <div id="tab1" className="tab-content"></div>
          </HorSection>
          <HorSection addRef={addDraggableScreen} label="222">
            <h2>Смертельный октет</h2>
            <div id="tab2" className="tab-content"></div>
          </HorSection>
          <HorSection addRef={addDraggableScreen} label="333">
            <h2>Звенья патогенеза СД2</h2>
            <div id="tab3" className="tab-content"></div>
          </HorSection>
        </HorScreen>
      </Screen>
    </ScrollableContainer>
  );
};

export default App;
