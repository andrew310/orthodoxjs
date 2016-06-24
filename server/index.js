import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './generated/app';
import handlebars from 'express-handlebars';

const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('app', {
      app: ReactDomServer.renderToString(<App />)
    });
});

app.listen(3000, () => console.log('magic happens on port 3000'));
