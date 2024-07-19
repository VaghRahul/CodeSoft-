const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Example routes (replace with actual implementations)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/jobs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jobs.html'));
});

app.get('/employer-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'employer-dashboard.html'));
});

app.get('/candidate-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'candidate-dashboard.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
