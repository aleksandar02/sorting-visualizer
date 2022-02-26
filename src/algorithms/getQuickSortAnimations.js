export const getQuickSortAnimations = arr => {
  const animations = [];
  quickSortHelper(arr, 0, arr.length - 1, animations);

  console.log(animations);
  return animations;
};

function quickSortHelper(arr, startIdx, endIdx, animations) {
  if (startIdx < endIdx) {
    const pivotIdx = partition(arr, startIdx, endIdx, animations);
    quickSortHelper(arr, startIdx, pivotIdx - 1, animations);
    quickSortHelper(arr, pivotIdx + 1, endIdx, animations);
  }
}

function partition(arr, startIdx, endIdx, animations) {
  let pivot = startIdx;

  for (let i = startIdx; i < endIdx; i++) {
    animations.push([i, pivot]);
    animations.push([i, pivot]);

    if (arr[i] <= arr[endIdx]) {
      animations.push([i, pivot]);
      swap(arr, i, pivot);
      pivot++;
    } else {
      animations.push([i, i]);
    }

    animations.push([endIdx, pivot]);
    animations.push([endIdx, pivot]);
    animations.push([endIdx, pivot]);
    swap(arr, endIdx, pivot);

    return pivot;
  }
}

const swap = (arr, firstIdx, secondIdx) => {
  let temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
};
