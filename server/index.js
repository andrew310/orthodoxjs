import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('express server running');
});

app.listen(3000, () => console.log('magic happens on port 3000'));
