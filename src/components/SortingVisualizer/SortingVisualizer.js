import React, { useState, useEffect } from 'react';
import Node from '../../components/Node';
import Header from '../Header';
import { getBubbleSortAnimations } from '../../algorithms/getBubbleSortAnimations';
import { getSelectionSortAnimations } from '../../algorithms/getSelectionSortAnimations';
import { getMergeSortAnimations } from '../../algorithms/getMergeSortAnimations';
import { getQuickSortAnimations } from '../../algorithms/getQuickSortAnimations';

const randomArr = arrLength => {
  let arr = [];
  for (let i = 0; i < arrLength; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
  }

  return arr;
};

const SortingVisualizer = () => {
  const [arr, setArr] = useState([]);
  const [speed, setSpeed] = useState(10);

  useEffect(() => {
    const newArr = randomArr(80);

    setArr(newArr);
  }, []);

  const changeArr = e => {
    const newArr = randomArr(e.target.value);

    setArr(newArr);
  };

  const changeSpeed = e => {
    const newSpeed = e.target.value;
    setSpeed(newSpeed);
  };

  const generateArr = () => {
    const newArr = randomArr(arr.length);
    setArr(newArr);
  };

  const bubbleSortHandler = () => {
    const animations = getBubbleSortAnimations(arr);

    for (let i = 0; i < animations.length; i++) {
      const nodes = document.querySelectorAll('.Node');

      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [nodeOneIdx, nodeTwoIdx] = animations[i];

        const nodeOneStyle = nodes[nodeOneIdx];
        const nodeTwoStyle = nodes[nodeTwoIdx];

        const color = i % 3 === 0 ? '#f9f871' : '#ff4773';

        setTimeout(() => {
          if (nodeOneStyle.clientHeight <= nodeTwoStyle.clientHeight) {
            nodeOneStyle.style.background = '#f9f871';
            nodeTwoStyle.style.background = '#f9f871';
          } else {
            nodeOneStyle.style.background = color;
            nodeTwoStyle.style.background = color;
          }
        }, i * speed);
      } else {
        setTimeout(() => {
          const [nodeOneIdx, nodeTwoIdx] = animations[i];

          const nodeOneStyle = nodes[nodeOneIdx].style;
          const nodeTwoStyle = nodes[nodeTwoIdx].style;

          let temp = nodeOneStyle.height;
          nodeOneStyle.height = nodeTwoStyle.height;
          nodeTwoStyle.height = temp;

          nodes.forEach(node => {
            node.style.background = '#00bd9d';
          });
        }, i * speed);
      }
    }
  };

  const selectionSortHandler = () => {
    const animations = getSelectionSortAnimations(arr);

    for (let i = 0; i < animations.length; i++) {
      const nodes = document.querySelectorAll('.Node');

      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [nodeOneIdx, nodeTwoIdx] = animations[i];
        const nodeOne = nodes[nodeOneIdx];
        const nodeTwo = nodes[nodeTwoIdx];

        const color = i % 3 === 0 ? '#f9f871' : '#ff4773';

        setTimeout(() => {
          if (nodeOneIdx === nodeTwoIdx) {
            nodeOne.style.background = '#f9f871';
            nodeTwo.style.background = '#f9f871';
          } else {
            nodeOne.style.background = color;
            nodeTwo.style.background = color;
          }
        }, i * speed);
      } else {
        setTimeout(() => {
          const [nodeOneIdx, nodeTwoIdx] = animations[i];

          const nodeOneStyle = nodes[nodeOneIdx].style;
          const nodeTwoStyle = nodes[nodeTwoIdx].style;

          let temp = nodeOneStyle.height;
          nodeOneStyle.height = nodeTwoStyle.height;
          nodeTwoStyle.height = temp;

          nodes.forEach(node => {
            node.style.background = '#00bd9d';
          });
        }, i * speed);
      }
    }
  };

  const mergeSortHandler = () => {
    console.log(arr);
    const animations = getMergeSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const nodes = document.querySelectorAll('.Node');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [nodeOneIdx, nodeTwoIdx] = animations[i];
        const nodeOneStyle = nodes[nodeOneIdx].style;
        const nodeTwoStyle = nodes[nodeTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'yellow';
        setTimeout(() => {
          nodeOneStyle.backgroundColor = color;
          nodeTwoStyle.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          const [nodeOneIdx, newHeight] = animations[i];
          const nodeOneStyle = nodes[nodeOneIdx].style;
          nodeOneStyle.height = `${newHeight * 5}px`;

          nodes.forEach(node => {
            node.style.background = '#00bd9d';
          });
        }, i * speed);
      }
    }
  };

  const quickSortHandler = () => {};

  return (
    <div>
      <Header
        changeArr={changeArr}
        arrLength={arr.length}
        bubbleSortHandler={bubbleSortHandler}
        generateArr={generateArr}
        selectionSortHandler={selectionSortHandler}
        mergeSortHandler={mergeSortHandler}
        quickSortHandler={quickSortHandler}
        changeSpeed={changeSpeed}
      />
      <div className='NodeContainer'>
        {arr.map((el, index) => {
          return <Node key={index} arrLength={arr.length} arrValue={el} />;
        })}
      </div>
    </div>
  );
};

export default SortingVisualizer;
