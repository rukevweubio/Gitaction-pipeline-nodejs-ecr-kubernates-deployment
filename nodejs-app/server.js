const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',           // lowercase to match test
    timestamp: Date.now()   // current timestamp
  });
});

// Fallback to index.html for any other route (for SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Only start server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
