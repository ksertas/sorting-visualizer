const blue = '#4295d6';
const red = '#C62F2F';
const green = '#2FC659';
const darkGreen = '#188741';
const yellow = '#C68A2F';
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

const updateColor = (div, color) => {
  setTimeout(() => {
    div.style.backgroundColor = color;
  }, sortingDelay+=speed);
};

const swap = (div1, div2) => {
  setTimeout(() => {
    let tempDiv = div1.style.height;
    div1.style.height = div2.style.height;
    div2.style.height = tempDiv;
  }, sortingDelay+=speed);
};

const emphasizeBarsOnComplete = (bars) => {
  for (let i = 0; i < bars.length; i++) {
    updateColor(bars[i], darkGreen);
  }
};

// not optimized version
const bubbleSort = () => {
  let nSorted = 0;
  let arr = prepareSort();

  // go through algorithm using nList[] values and swap div height styles at same indexes.
  for (let i = 0; i < nList.length; i++) {
    for (let j = 0; j < nList.length - nSorted; j++) {
      updateColor(arr[j], yellow);
      if (nList[j] > nList[j + 1]) {
        updateColor(arr[j], red);
        updateColor(arr[j + 1], red);
        let temp = nList[j];
        nList[j] = nList[j + 1];
        nList[j + 1] = temp;
        swap(arr[j], arr[j + 1]);
      } 
      updateColor(arr[j], blue);
    }
    nSorted++;
    updateColor(arr[arr.length - nSorted], green);
  }
  emphasizeBarsOnComplete(arr);
};

const selectionSort = () => {
  let nSorted = 0;
  let arr = prepareSort();
           
  for (let i = 0; i < nList.length; i++) {
    let min = nSorted;
    for (let j = 0 + nSorted; j < nList.length; j++) {
      updateColor(arr[j], yellow);
      if (nList[j] < nList[min]) {
        updateColor(arr[min], blue);
        min=j;
        updateColor(arr[min], red);
      }
      updateColor(arr[j], blue);
      updateColor(arr[min], red);
    }
    updateColor(arr[min], blue);
    if (min != nSorted) {
      let tmp = nList[i]; 
      nList[i] = nList[min];
      nList[min] = tmp;   
      swap(arr[i], arr[min]);   
    }
    updateColor(arr[nSorted], green);
    nSorted++;
  }
  emphasizeBarsOnComplete(arr);
};

const insertionSort = () => {
  let arr = prepareSort();

  for (let i = 1; i < nList.length; i++) {
    updateColor(arr[i - 1], green);
    let current = nList[i];
    updateColor(arr[i], yellow);
    let j = i - 1; 
    while ((j > -1) && (current < nList[j])) {
      nList[j+1] = nList[j];
      updateColor(arr[j + 1], yellow);
      updateColor(arr[j], yellow);
      updateColor(arr[j + 1], red);
      updateColor(arr[j], red);
      swap(arr[j + 1], arr[j]);
      updateColor(arr[j + 1], green);
      updateColor(arr[j], green);
      j--;
    }
    nList[j + 1] = current;
  }
  emphasizeBarsOnComplete(arr);
};

export { bubbleSort, insertionSort, selectionSort };

