const reader = process.stdin;

const readSingleCharecter = () => {
  reader.setRawMode(true);
  reader.setEncoding('utf8');

  reader.on('data', (charecter) => {
    // console.log(charecter);
    if (charecter === 'q') {
      process.exit(0);
    }
  });
}

readSingleCharecter();