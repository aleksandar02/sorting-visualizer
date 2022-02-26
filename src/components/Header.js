import React from 'react';

const Header = props => {
  return (
    <header>
      <nav>
        <div>
          <h4 onClick={props.generateArr}>Generate New Array</h4>
        </div>
        <div>
          <h4>Array Size</h4>
          <input
            type='range'
            min='5'
            max='100'
            value={props.arrLength}
            className='Slider'
            id='rangeSlider'
            onChange={props.changeArr}
          />
          <h4>Sorting Speed</h4>
          <input
            type='range'
            min='5'
            max='800'
            value={props.speed}
            className='Slider'
            id='speedSlider'
            onChange={props.changeSpeed}
          />
        </div>
        <div>
          <ul>
            <li onClick={props.mergeSortHandler}>Merge Sort</li>
            <li onClick={props.quickSortHandler}>Quick Sort</li>
            <li onClick={props.selectionSortHandler}>Selection Sort</li>
            <li onClick={props.bubbleSortHandler}>Bubble Sort</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
