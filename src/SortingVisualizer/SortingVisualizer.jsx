import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/bubbleSort.js';
import {getHeapSortAnimations} from '../sortingAlgorithms/heapSort.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/quickSort.js';
import {getSelectionSortAnimations} from '../sortingAlgorithms/selectionSort.js';
import {getInsertionSortAnimations} from '../sortingAlgorithms/insertionSort.js';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav,Form,FormControl,Button,ButtonToolbar } from 'react-bootstrap';
import './SortingVisualizer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 50;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx,num] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = num === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight,num] = animations[i];
          let barOneStyle = arrayBars[barOneIdx].style;
          let barTwoStyle = arrayBars[newHeight].style;
          let temp = barOneStyle.height;
          //console.log("First index: "+barOneIdx+" First val: "+temp + " Second index: "+newHeight + " Second val: " + barTwoStyle.height);
          //console.log(temp,newHeight);
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx,num] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = num === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight,num] = animations[i];
          let barOneStyle = arrayBars[barOneIdx].style;
          let barTwoStyle = arrayBars[newHeight].style;
          let temp = barOneStyle.height;
          //console.log("First index: "+barOneIdx+" First val: "+temp + " Second index: "+newHeight + " Second val: " + barTwoStyle.height);
          //console.log(temp,newHeight);
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx,num] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = num === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight,num] = animations[i];
          let barOneStyle = arrayBars[barOneIdx].style;
          let barTwoStyle = arrayBars[newHeight].style;
          let temp = barOneStyle.height;
          //console.log("First index: "+barOneIdx+" First val: "+temp + " Second index: "+newHeight + " Second val: " + barTwoStyle.height);
          //console.log(temp,newHeight);
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort(){
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx,num] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = num === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight,num] = animations[i];
          let barOneStyle = arrayBars[barOneIdx].style;
          let barTwoStyle = arrayBars[newHeight].style;
          let temp = barOneStyle.height;
          //console.log("First index: "+barOneIdx+" First val: "+temp + " Second index: "+newHeight + " Second val: " + barTwoStyle.height);
          //console.log(temp,newHeight);
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort(){
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx,num] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = num === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight,num] = animations[i];
          let barOneStyle = arrayBars[barOneIdx].style;
          let barTwoStyle = arrayBars[newHeight].style;
          let temp = barOneStyle.height;
          //console.log("First index: "+barOneIdx+" First val: "+temp + " Second index: "+newHeight + " Second val: " + barTwoStyle.height);
          //console.log(temp,newHeight);
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  // testSortingAlgorithms() {
  //   for (let i = 0; i < 100; i++) {
  //     const array = [];
  //     const length = randomIntFromInterval(1, 1000);
  //     for (let i = 0; i < length; i++) {
  //       array.push(randomIntFromInterval(-1000, 1000));
  //     }
  //     const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  //     const mergeSortedArray = getMergeSortAnimations(array.slice());
  //     console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
  //   }
  // }

  render() {
    const {array} = this.state;

    return (
      <div>
        { <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Sorting Visualizer Tool</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <ButtonToolbar>
                                <Button onClick={() => this.resetArray()} variant="outline-warning" size="sm">
                                    Generate New Array
                                </Button>
                        </ButtonToolbar>
                    </Nav>
                    <Nav className="mr-auto">
                        <ButtonToolbar>
                                <Button onClick={() => this.mergeSort()} variant="outline-danger" size="sm">
                                    Merge Sort
                                </Button>
                        </ButtonToolbar>
                    </Nav>
                    <Nav className="mr-auto">
                        <ButtonToolbar>
                                <Button onClick={() => this.quickSort()} variant="outline-success" size="sm">
                                    Quick Sort
                                </Button>
                        </ButtonToolbar>
                    </Nav>
                    <Nav className="mr-auto">
                        <ButtonToolbar>
                                <Button onClick={() => this.heapSort()} variant="outline-info" size="sm">
                                    Heap Sort
                                </Button>
                        </ButtonToolbar>
                    </Nav>
                    <Nav className="mr-auto">
                        <ButtonToolbar>
                                <Button onClick={() => this.bubbleSort()} variant="outline-light" size="sm">
                                    Bubble Sort
                                </Button>
                        </ButtonToolbar>
                    </Nav>
                    <Nav className="mr-auto">
                        <ButtonToolbar>
                                <Button onClick={() => this.selectionSort()} variant="outline-primary" size="sm">
                                    Selection Sort
                                </Button>
                        </ButtonToolbar>
                    </Nav>
                    <Nav className="mr-auto">
                        <ButtonToolbar>
                                <Button onClick={() => this.insertionSort()} variant="outline-warning" size="sm">
                                    Insertion Sort
                                </Button>
                        </ButtonToolbar>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> }
          <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}></div>
          ))}
          {/* <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>  
          <button onClick={() => this.selectionSort()}>Insertion Sort</button> */}
        </div>
      </div>
      
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// {/* // function arraysAreEqual(arrayOne, arrayTwo) {
// //   if (arrayOne.length !== arrayTwo.length) return false;
// //   for (let i = 0; i < arrayOne.length; i++) {
// //     if (arrayOne[i] !== arrayTwo[i]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // } */}