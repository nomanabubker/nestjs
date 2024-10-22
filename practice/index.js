const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const orders = [];

app.post('/api/orders', (req, res) => {
    const { burger, name, email, phone } = req.body;
    
    if (!burger || !name || !email || !phone) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const newOrder = { burger, name, email, phone };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

app.get('/api/orders', (req, res) => {
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
