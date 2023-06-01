import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  //exercise1: increase the count number
  const increaseHandler = () => {
    setCount(count + 1);
  };
  //change doc title
  useEffect(() => {
    document.title = "change title" + String(count);
  }, [count]);
  return (
    <div className='App'>
      <div className='section section-1'>
        <div className='section-req-container'>
          <h2>Section 1 - Hooks</h2>
          <h3>Requirement:</h3>
          <p>Use react hooks: on every click of the 'Press me!' button, increment the number next to it by 1, also update the website title by setting document.title</p>
        </div>
        <div className='section-controls-container'>
          <button onClick={increaseHandler}>Press me!</button>
          <span>{count}</span>
        </div>
      </div>
      <div className='section section-2'>
        <div className='section-req-container'>
          <h2>Section 2 - Bootstrap grid</h2>
          <h3>Requirement:</h3>
          <p>modify below grid, so the columns will be stacking on each other vertically when the screen width is smaller than 768px</p>
        </div>
        <div className='section-controls-container'>
          <div className='container'>
            <div className='row'>
              <div className= 'col-md-8 grid-style'>
                8 of 12
              </div>
              <div className= 'col-md-4 grid-style'>
                4 of 12
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section section-3'>
        <div className='section-req-container'>
          <h2>Section 3 - Bootstrap icons</h2>
          <h3>Requirement:</h3>
          <p>Add your favorite bootstrap icon below</p>
        </div>
        <div className='section-controls-container'>
          <span>Your icon goes here ➡️ <i className="bi bi-airplane-engines"></i></span>
        </div>
      </div>
    </div>
  );
}

export default App;
