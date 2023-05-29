import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='section section-1'>
        <div className='section-req-container'>
          <h2>Section 1 - Hooks</h2>
          <h3>Requirement:</h3>
          <p>Use react hooks: on every click of the 'Press me!' button, increment the number next to it by 1, also update the website title by setting document.title</p>
        </div>
        <div className='section-controls-container'>
          <button>Press me!</button>
          <span>0</span>
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
              <div className='col-8 grid-style'>
                8 of 12
              </div>
              <div className='col-4 grid-style'>
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
          <span>Your icon goes here ➡️</span>
        </div>
      </div>
    </div>
  );
}

export default App;
