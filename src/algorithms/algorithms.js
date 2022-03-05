const blue = '#4295d6';
const red = '#C62F2F';
const green = '#2FC659';
const darkGreen = '#188741';
const yellow = '#C68A2F';
const orange = 'darkorange';
const emphasizeDelay = 10;
const sortingDelay = 300;

function updateColor(div, color) {
  div.style.backgroundColor = color;
}

function swap(div1, div2) {
  let tempHeight = div1.style.height;
  div1.style.height = div2.style.height;
  div2.style.height = tempHeight;
}

async function emphasizeBarsOnComplete(bars) {
  for (let i = 0; i < bars.length; i++) {
    updateColor(bars[i], darkGreen);
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, emphasizeDelay)
    );
  }
}

// not optimized version
async function bubbleSort() {
  let nSorted = 0;
  // get all the bars' generated height and store in array to use in algorithm comparisons.
  // this is an alternative to getting the height style of a div, splicing the string and parsing the int inside the algorithm block.
  const arr = document.getElementsByClassName('bar');
  const nList = [];
  for (let i = 0; i < arr.length; i++) {
    nList.push(parseInt(arr[i].innerText));
  }
  
  // go through algorithm using nList[] values and swap div height styles at same indexes.
  for (let i = 0; i < nList.length; i++) {
    for (let j = 0; j < nList.length - nSorted; j++) {
      if (nList[j] > nList[j + 1]) {
        let temp = nList[j];
        nList[j] = nList[j + 1];
        nList[j + 1] = temp;
        swap(arr[j], arr[j + 1]);
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, sortingDelay)
      );
    }
    nSorted++;
    updateColor(arr[arr.length - nSorted], green);
  }
  emphasizeBarsOnComplete(arr);
}

function selectionSort(arr) {         
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]) {
        min=j; 
      }
    }
    if (min != i) {
      let tmp = arr[i]; 
      arr[i] = arr[min];
      arr[min] = tmp;      
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i-1; 
    while ((j > -1) && (current < arr[j])) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
  return arr;
}

export { bubbleSort, insertionSort, selectionSort };

