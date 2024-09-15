// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// API route to handle appointment booking
app.post('/api/book', (req, res) => {
    const { name, email, date } = req.body;

    // For now, just log the booking details
    console.log(`New booking: ${name}, ${email}, ${date}`);

    // Send a success response
    res.status(200).send('Booking received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
