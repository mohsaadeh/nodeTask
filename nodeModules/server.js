const fs = require('fs');

const filePath = 'example.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  console.log('File contents:');
  console.log(data);
});



const content = 'Hello, World!';

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }

  console.log('Successfully wrote to the file:', filePath);
});



///---------------


// const http = require('http');

// const hostname = 'localhost';
// const port = 8080;

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!');
//   } else {
//     res.statusCode = 404;
//     res.end('Not Found');
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



const http = require('http');
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    console.log("---------------");
    console.log(req.url);
  if (req.url === '/') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



const path = require('path');

const filePath1 = "/path/to/file1";
const filePath2 = "/path/to/file2";

const joinedPath = path.join(filePath1, filePath2);

console.log(joinedPath);

//-------------------------

const url = require('url');

const urlString = 'http://www.example.com:8080/path?query=value#fragment';

const parsedUrl = new URL(urlString);

const parsedUrlObject = {
  protocol: parsedUrl.protocol,
  host: parsedUrl.host,
  pathname: parsedUrl.pathname,
  search: parsedUrl.search,
  hash: parsedUrl.hash
};

console.log(parsedUrlObject);


//----------------------------

const os = require('os');

const homeDirectory = os.homedir();

console.log(homeDirectory);

//----------------------
const crypto = require('crypto');

const randomBytes = crypto.randomBytes(4);
const randomHex = randomBytes.toString('hex');
const randomNumber = parseInt(randomHex, 16);

console.log(randomNumber);

//----------------
