# Sorting Visualizer
This application visualizes common sorting algorithms, making it easier to compare the differences between each of them for educational purposes.

## **How it works**
### **Setup**
Two arrays are generated. One to perform the actual algorithm on, and the other to visualize the steps of that algorithm.  
For example, given a randomly generated array of length 3 with the minimum and maximum integer size between 5 (inclusive) and 100 (inclusive);  
```javascript
[53, 25, 42]
```
another array consisting of HTML `div` elements will be created;
```javascript
  [<div style="height: 53px"></div>, <div style="height: 25px"></div>, <div style="height: 42px"></div>]
```
###### (Styling such as width and background color omitted)
where each `div`'s height is based on the integer of its counterpart. This will result in a row of bars on which the algorithm will be visualized on.

### **Animating the algorithm**
The animation consists of **swapping height styles** and **changing the background color** of the elements which are being compared. `setTimeout` will be used to delay the height swapping and color changes as otherwise the bars will be sorted in place instantly. 

*Example*  
Given array `[15, 3, 20, 7]`, the following collection of `div`s will be created and rendered on the page:
```javascript
  [<div style="height: 15px"></div>, <div style="height: 3px"></div>, <div style="height: 20px"></div>, <div style="height: 7px"></div>]
```
###### (Styling such as width and background color omitted)  
The array of integers will go through the bubble sort algorithm, **while simultaneously** `div` elements will have their height and background colors changed inside a `setTimeout` function to achieve an animation effect.  
The positions of the `div`s which have their styles changed correspond to the positions of the integers which are being compared:  
```javascript
[15, 3, 20, 7]
[3, 15, 20, 7]
[3, 15, 7, 20]
[3, 7, 15, 20]

↓

[<div style="height: 15px"></div>, <div style="height: 3px"></div>, <div style="height: 20px"></div>, <div style="height: 7px"></div>]
[<div style="height: 3px"></div>, <div style="height: 15px"></div>, <div style="height: 20px"></div>, <div style="height: 7px"></div>]
[<div style="height: 3px"></div>, <div style="height: 15px"></div>, <div style="height: 7px"></div>, <div style="height: 20px"></div>]
[<div style="height: 3px"></div>, <div style="height: 7px"></div>, <div style="height: 15px"></div>, <div style="height: 20px"></div>]

```
###### (Styling such as width and background color omitted) 

## **Available algorithms**
- [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
- [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)
- [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)
- [Quicksort](https://en.wikipedia.org/wiki/Quicksort)


## **Technologies used**
- [React](https://github.com/facebook/react)
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [React icons](https://github.com/react-icons/react-icons)
- [MUI](https://github.com/mui/material-ui)


## **Live demo**
[View the live demo here](https://ksertas.github.io/sorting-visualizer)