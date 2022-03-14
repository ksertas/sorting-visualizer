const BLUE = '#4295d6';
const RED = '#C62F2F';
const GREEN = '#2FC659';
const DARKGREEN = '#188741';
const YELLOW = '#C68A2F';
const speed = 5;
let sortingDelay = 0;
let nList = [];

// get all the bars' generated height and store in array to use in algorithm comparisons.
// this is an alternative to getting the height style of a div, splicing the string and parsing the int inside the algorithm block.
const prepareSort = () => {
  const arr = document.getElementsByClassName('bar');
  for (let i = 0; i < arr.length; i++) {
    nList.push(parseInt(arr[i].innerText));
  }
  return arr;
};

function updateColor(div, color) {
  setTimeout(() => {
    div.style.backgroundColor = color;
    if (arguments[1] === '#2FC659') {
      div.classList.add('sorted');
    }
  }, sortingDelay+=speed);
}

const swap = (div1, div2) => {
  setTimeout(() => {
    let tempDiv = div1.style.height;
    div1.style.height = div2.style.height;
    div2.style.height = tempDiv;
  }, sortingDelay+=speed);
};

const emphasizeBarsOnComplete = (bars) => {
  for (let i = 0; i < bars.length; i++) {
    updateColor(bars[i], DARKGREEN);
  }
};

// not optimized version
const bubbleSort = () => {
  let nSorted = 0;
  let arr = prepareSort();

  // go through algorithm using nList[] values and swap div height styles at same indexes.
  for (let i = 0; i < nList.length; i++) {
    for (let j = 0; j < nList.length - nSorted; j++) {
      updateColor(arr[j], YELLOW);
      if (nList[j] > nList[j + 1]) {
        updateColor(arr[j], RED);
        updateColor(arr[j + 1], RED);
        let temp = nList[j];
        nList[j] = nList[j + 1];
        nList[j + 1] = temp;
        swap(arr[j], arr[j + 1]);
      } 
      updateColor(arr[j], BLUE);
    }
    nSorted++;
    updateColor(arr[arr.length - nSorted], GREEN);
  }
  emphasizeBarsOnComplete(arr);
};

const selectionSort = () => {
  let nSorted = 0;
  let arr = prepareSort();
           
  for (let i = 0; i < nList.length; i++) {
    let min = nSorted;
    for (let j = 0 + nSorted; j < nList.length; j++) {
      updateColor(arr[j], YELLOW);
      if (nList[j] < nList[min]) {
        updateColor(arr[min], BLUE);
        min=j;
        updateColor(arr[min], RED);
      }
      updateColor(arr[j], BLUE);
      updateColor(arr[min], RED);
    }
    updateColor(arr[min], BLUE);
    if (min != nSorted) {
      let tmp = nList[i]; 
      nList[i] = nList[min];
      nList[min] = tmp;   
      swap(arr[i], arr[min]);   
    }
    updateColor(arr[nSorted], GREEN);
    nSorted++;
  }
  emphasizeBarsOnComplete(arr);
};

const insertionSort = () => {
  let arr = prepareSort();

  for (let i = 1; i < nList.length; i++) {
    updateColor(arr[i - 1], GREEN);
    let current = nList[i];
    updateColor(arr[i], YELLOW);
    let j = i - 1; 
    while ((j > -1) && (current < nList[j])) {
      nList[j+1] = nList[j];
      updateColor(arr[j + 1], YELLOW);
      updateColor(arr[j], YELLOW);
      updateColor(arr[j + 1], RED);
      updateColor(arr[j], RED);
      swap(arr[j + 1], arr[j]);
      updateColor(arr[j + 1], GREEN);
      updateColor(arr[j], GREEN);
      j--;
    }
    nList[j + 1] = current;
  }
  emphasizeBarsOnComplete(arr);
};


const quickSort = (nList, start, end, arr) => {
  if (start < end){
    let j = partition(nList, start, end, arr);
    updateColor(arr[j], GREEN);
    quickSort(nList, start, j, arr);
    quickSort(nList, j+1, end, arr);
  }
};

const partition = (nList, start, end, arr) => {
  let pivot = nList[start];
  let i = start;
  let j = end;

  while (i < j){
    do {
      i++;
    } while (nList[i] <= pivot);
    do {
      j--;
    } while(nList[j] > pivot);
    
    if (i < j) {
      updateColor(arr[i], YELLOW);
      updateColor(arr[j], YELLOW);
      updateColor(arr[i], RED);
      updateColor(arr[j], RED);
      let temp = nList[i];
      nList[i] = nList[j];
      nList[j] = temp;
      swap(arr[i], arr[j]);
      updateColor(arr[i], BLUE);
      updateColor(arr[j], BLUE);
    }
  }
  
  updateColor(arr[start], YELLOW);
  updateColor(arr[j], YELLOW);
  updateColor(arr[start], RED);
  updateColor(arr[j], RED);
  let temp = nList[start];
  nList[start] = nList[j];
  nList[j] = temp;
  swap(arr[start], arr[j]);
  updateColor(arr[start], BLUE);
  updateColor(arr[j], BLUE);

  return j;
};

const runQuickSort = () => {
  let arr = prepareSort();
  quickSort(nList, 0, arr.length, arr);
};

export { bubbleSort, insertionSort, selectionSort, runQuickSort };

