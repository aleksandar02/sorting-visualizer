const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

export const getBubbleSortAnimations = arr => {
  const animations = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);

      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1]);
        swap(arr, j, j + 1);
      } else {
        animations.push([j, j]);
      }
    }
  }

  return animations;
};
