import DataFetching from './Components/axios/DataFetching';
import IntervalHookCounter from './Components/useEffect/IntervalHookCounter';
import MouseContainer from './Components/useEffect/MouseContainer'; import HookCounterThree from './Components/HookCounterThree';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterFour from './Components/HookCounterFour';
import ClassCounterOne from './Components/useEffect/ClassCounterOne';
import HookCounterOne from './Components/useEffect/HookCounterOne';
import ClassMouse from './Components/useEffect/ClassMouse';
import HookMouse from './Components/useEffect/HookMouse';
import { useState } from 'react';
import IntervalClassCounter from './Components/useEffect/IntervalClassCounter'
import axios from '../src/Services/instance';
function App() {
  
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}

      {/* <ClassCounterOne/>     */}
      {/* <HookCounterOne/> */}

      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/>  */}
      {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}
    <DataFetching/>

    </div>
  );
}

export default App;
