const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

const minimumIdx = (arr, startIdx) => {
  let minValue = arr[startIdx];
  let minIndex = startIdx;

  for (let i = minIndex; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
};

export const getSelectionSortAnimations = arr => {
  const animations = [];

  for (let i = 0; i < arr.length; i++) {
    let minIdx = minimumIdx(arr, i);

    animations.push([i, minIdx]);
    animations.push([i, minIdx]);
    animations.push([i, minIdx]);

    swap(arr, i, minIdx);
  }

  return animations;
};

// export const getSelectionSortAnimations = () => {
//   let arr = document.querySelectorAll('.Node');

//   for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//       let minIdx = minimumIdx(arr, i);
//       arr.forEach(el => {
//         el.classList.remove('active-bg');
//       });

//       swap(arr, i, minIdx);

//       setTimeout(() => {
//         arr.forEach(el => {
//           el.classList.remove('active-bg');
//         });
//       }, i * 100);
//     }, i * 100);
//   }

//   document.body.style.pointerEvents = 'all';
// };
