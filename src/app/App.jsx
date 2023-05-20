import React from 'react';
import './App.css';
import { Stage } from 'react-pixi-fiber';
import { Provider } from 'react-redux';
import Sandbox from './components/sandbox/Sandbox';
import PixiDevToolsConnector from './components/devtools/PixiDevToolsConnector';
import { store } from '../redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
          <Provider store={store}>
            <Sandbox />
          </Provider>
          <PixiDevToolsConnector />
        </Stage>
      </header>
    </div>
  );
}

export default App;
