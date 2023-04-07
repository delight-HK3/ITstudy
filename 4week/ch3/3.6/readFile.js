const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // mac 에서는 실행이 안된다.
  console.log(data.toString());
});