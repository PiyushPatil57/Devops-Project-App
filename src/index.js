const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello from Sample App! Welcome to DevOps Project.');
});

// Health endpoint
app.get('/status', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime().toFixed(2) + 's', timestamp: new Date() });
});

// Sample API endpoint
app.get('/api/greet/:name', (req, res) => {
    res.json({ message: `Hello, ${req.params.name}! This is your DevOps microservice.` });
});

// Start server
app.listen(PORT, () => console.log(`Sample App running on port ${PORT}`));
