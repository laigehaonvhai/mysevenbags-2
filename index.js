// Import necessary libraries or modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route to provide information about CryptoEducation
app.get('/cryptoeducation', (req, res) => {
    try {
        // Information about CryptoEducation (replace this with your actual platform information)
        const cryptoEducationInfo = {
            name: "CryptoEducation",
            description: "CryptoEducation is your cryptocurrency learning center, offering online courses, training, and educational resources to help you understand the basics and advanced technologies of cryptocurrencies.",
            offerings: ["Online courses", "Training sessions", "Educational resources (e-books, articles, videos)"],
            website: "https://cryptoeducation.com"
        };

        // Send CryptoEducation information as JSON response
        res.json(cryptoEducationInfo);
    } catch (error) {
        console.error('Error providing CryptoEducation information:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`CryptoEducation server is running on port ${PORT}`);
});
