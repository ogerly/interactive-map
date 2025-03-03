const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Normalize URL to prevent directory traversal
  let filepath = path.normalize(path.join(__dirname, req.url));
  
  // If URL ends with '/', serve index.html
  if (req.url === '/' || req.url === '') {
    filepath = path.join(__dirname, 'index.html');
  }
  
  // Get file extension to determine content type
  const ext = path.extname(filepath);
  
  // Read file and serve
  fs.readFile(filepath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404);
        res.end('404: File Not Found');
        return;
      }
      
      // Server error
      res.writeHead(500);
      res.end('500: Internal Server Error');
      return;
    }
    
    // Set content type header
    res.setHeader('Content-Type', MIME_TYPES[ext] || 'text/plain');
    
    // Enable CORS for development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Send response
    res.writeHead(200);
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Press Ctrl+C to stop the server`);
});
