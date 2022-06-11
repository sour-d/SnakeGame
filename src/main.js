const reader = process.stdin;

const readSingleCharecter = (callback) => {
  reader.setRawMode(true);
  reader.setEncoding('utf8');
  reader.on('data', callback);
}

const processKeystokes = (key) => {
  let message = 'Oops!';
  if (key === 'q') {
    process.exit(0);
  }
  if (key === 'h') {
    message = 'hi';
  }
  if (key === 'b') {
    message = 'bye';
  }

  console.log(message);
};

const main = () => {
  readSingleCharecter(processKeystokes);
};

main();