//THIS FILE CONTAINS ALL THE UTILITY FUNCTIONS TO CREATE RANDOM COLORS AND PIXEL MAP FOR CANVAS

//step generator for each discreet rgb value, e.g. 8 - 256, 32 steps in this case
const createRgbSteps = (min, max, stepSize) => {
  let tempArr = [];
  for (let i = min; i <= max; i += stepSize) {
    tempArr.push(i);
  }
  return tempArr;
};

// generate all possible rgb colors from step values.
// The nested for loops create 32,768 unique color objects with r,g,b properties
const makeAllColors = (arr) => {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        let newColor = {
          red: arr[i],
          green: arr[j],
          blue: arr[k],
        };
        tempArr.push(newColor);
      }
    }
  }
  return tempArr;
};

//generate a html canvas pixel map of color values to be plotted on to canvas
export const createPixelMap = (colorsArr) => {
  let pixels = [];
  for (let i = 0; i < colorsArr.length; i++) {
    pixels.push(colorsArr[i].red);
    pixels.push(colorsArr[i].green);
    pixels.push(colorsArr[i].blue);
    pixels.push(255);
  }
  return pixels;
};

//create randomized patterns of the colors array to form various images of same colors
//set as handler to our refresh button
export const changeImagePatterns = () => {
  const randomPicker = Math.floor(Math.random() * 5);
  switch (randomPicker) {
    case 0:
      return function (a, b) {
        return b.red - a.blue;
      };
    case 1:
      return function (a, b) {
        return b.blue - a.blue;
      };
    case 2:
      return function (a, b) {
        return b.blue - a.green;
      };

    case 3:
      return function () {
        return Math.random() - 0.5;
      };

    default:
      return;
  }
};

const rgbValues = createRgbSteps(8, 256, 8);
export const allPossibleColors = makeAllColors(rgbValues);
