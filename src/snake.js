const reader = process.stdin;
const writer = process.stdout;

const snake = () => {
  console.log('••OOO@<~');
};

const clearPrevLine = () => {
  writer.moveCursor(-1, -1);
  writer.clearLine();
};

const printNewSnakeAt = (x, y) => {
  clearPrevLine();
  writer.moveCursor(x, y, snake);
};

const main = () => {
  printNewSnakeAt(0, 0);
  let nextX = 2;
  setInterval(() => {
    printNewSnakeAt(nextX, 0);
    nextX++;
  }, 1000);
};

main();