const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let a = 1;
  let b = 2;
  let c = 1 + 2;
  if ( a == b ) {
    console.log('a equals b')
  }
  console.log('1+2='+c);

  hello1('hello', 'world');
  hello2('my', 'world');
  calculateArea(30);
  res.send('Hello World!');
});

// Unused variable
let unusedVariable = 42; // This variable is never used

let server;

const hello1 = (a, b) => {
  console.log('hello1', a, b);
  return a + b;
}

// Unused function
const hello3 = (x) => {
  return x * 2; // This function is never called
}

const hello2 = (a, b) => {
  console.log('hello2', a, b);
  return a + b;
}

// Potential bug: using a magic number
function calculateArea(radius) {
  return Math.PI * radius * radius; // Magic number PI
}

function startServer() {
  server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

function stopServer(done) {
  if (server) {
    server.close(done);
  } else {
    done();
  }
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer, stopServer };