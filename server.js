const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// MIME types for different file extensions
const mimeTypes = {
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

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle requests
  if (req.method === 'GET') {
    const publicDir = __dirname;
    const requestedPath = req.url === '/' ? 'index.html' : req.url;
    let filePath = path.normalize(path.join(publicDir, requestedPath));

    // Prevent path traversal: ensure the resolved path is within publicDir
    if (!filePath.startsWith(publicDir + path.sep) && filePath !== publicDir) {
      res.writeHead(403, { 'Content-Type': 'text/html' });
      res.end('<h1>403 Forbidden</h1>');
      return;
    }

    // Get file extension
    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve the file
    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          // File not found
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The requested file was not found.</p>');
        } else {
          // Server error
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('<h1>500 Internal Server Error</h1><p>Something went wrong on the server.</p>');
          console.error('Server error:', error);
        }
      } else {
        // Success - serve the file
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  } else {
    // Method not allowed
    res.writeHead(405, { 'Content-Type': 'text/html' });
    res.end('<h1>405 Method Not Allowed</h1><p>Only GET requests are supported.</p>');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Word Password Generator GUI is running!`);
  console.log(`📍 Open your browser and navigate to: http://localhost:${PORT}`);
  console.log(`⏹️  Press Ctrl+C to stop the server`);
});

// Handle graceful shutdown
function shutdown() {
  console.log('\n🛑 Shutting down the server...');
  server.close(() => {
    console.log('✅ Server stopped successfully');
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
