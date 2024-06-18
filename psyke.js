// psychedelicTrip.js

const colors = require('colors');
const { Spinner } = require('cli-spinners');
const readline = require('readline');

const spinner = Spinner.dots;

// Function to clear the console
const clearConsole = () => {
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
};

// Function to generate random colors
const randomColor = (text) => {
  const colorFunctions = [
    colors.red,
    colors.green,
    colors.yellow,
    colors.blue,
    colors.magenta,
    colors.cyan,
    colors.white,
    colors.gray,
  ];
  const randomFunc = colorFunctions[Math.floor(Math.random() * colorFunctions.length)];
  return randomFunc(text);
};

// Function to generate random ASCII art patterns
const generatePattern = () => {
  const patterns = [
    '☮',
    '✿',
    '★',
    '✪',
    '❀',
    '☯',
    '♾',
    '✵',
    '⚛',
    '✧',
    '☾',
  ];
  return patterns[Math.floor(Math.random() * patterns.length)];
};

// Function to simulate a psychedelic trip
const psychedelicTrip = () => {
  let frame = 0;

  setInterval(() => {
    clearConsole();

    // Generate random patterns with random colors
    let output = '';
    for (let i = 0; i < process.stdout.rows; i++) {
      let line = '';
      for (let j = 0; j < process.stdout.columns / 2; j++) {
        line += randomColor(generatePattern()) + ' ';
      }
      output += line + '\n';
    }

    console.log(output);
    console.log(randomColor(`Frame: ${frame++}`));

  }, spinner.interval);
};

// Start the psychedelic trip simulation
psychedelicTrip();
