import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './generated/app';

const app = express();

app.get('/', (req, res) => {
    res.send(ReactDomServer.renderToString(<App />));
});

app.listen(3000, () => console.log('magic happens on port 3000'));
