const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Serve favicon.png from the root
app.get('/favicon.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/favicon.png'));
});

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Serve readme-preview.html
app.get('/readme', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'readme-preview.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`View the README at http://localhost:${port}/readme`);
  });
}

module.exports = app;
