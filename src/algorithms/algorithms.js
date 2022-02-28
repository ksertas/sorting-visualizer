// not optimized version
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
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
